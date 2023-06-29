import { useMemo } from "react";
import { useAccount, useConfig, useNetwork, useWalletClient } from "wagmi";
import { useAtom } from "jotai";
import { chainAtoms } from "@/storage/chains";

export const useChain = () => {
  const [chainAtom , setChainAtom] = useAtom(chainAtoms);
  const { chain: { id: chainId } = { id: chainAtom } } = useNetwork();

  const { data: signer } = useWalletClient();
  const config = useConfig();
  const provider = useMemo(() => {
    if (chainId && typeof config.args.publicClient === "function")
      return config.args.publicClient({ chainId });
    return config.publicClient;
  }, [chainId, config.args, config.publicClient]);

  const { address: account, isConnected } = useAccount();

  const switchChain = (chainId:number) => {
    setChainAtom(chainId);
  }

  return {
    chainId,
    signer,
    account,
    isConnected,
    switchChain,
    provider,
    ...useNetwork()
  };
};
