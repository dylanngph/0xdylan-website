import { chainInfo } from "@/configs/web3Config";

export function getChainIcon(chainId: number) {
  return chainInfo.find((chain) => chain.chainId === chainId)?.iconUrl;
}
