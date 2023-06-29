import PRESALE_ABI from "@/constants/abis/presale.json";
import { BUSD_ADDRESS, USDC_ADDRESS, USDT_ADDRESS } from "@bionlabs/core-sdk";
import { useEffect, useState } from "react";
import { formatUnits } from "ethers/lib/utils.js";
import type { BigNumberish } from "ethers";
import { useContractRead, useToken } from "wagmi";
import { useChain } from "./useChain";

export function usePresaleContract({
  contractAdrress,
  abi,
  functionName,
  chainId,
  args,
  enabled = true
}: {
  contractAdrress: `0x${string}` | undefined;
  abi?: any;
  functionName: string;
  chainId?: number;
  args?: any[];
  enabled?: boolean;
}) {
  return useContractRead({
    address: contractAdrress,
    abi: PRESALE_ABI,
    functionName: functionName,
    chainId: chainId,
    enabled,
    args
  });
}

export const useLaunchpad = (launchpad: any) => {
  const { account } = useChain();
  const map = {
    [USDT_ADDRESS[launchpad?.chainId]?.toLowerCase()]: "USDT",
    [BUSD_ADDRESS[launchpad?.chainId]?.toLowerCase()]: "BUSD",
    [USDC_ADDRESS[launchpad?.chainId]?.toLowerCase()]: "USDC",
  };
  const unit = launchpad?.isQuoteETH ? "BNB" : map[launchpad?.quoteToken];
  
  const endTimeFormatted = new Date(launchpad.endTime * 1000);
  const startTimeFormatted = new Date(launchpad.startTime * 1000);

  const { data: quoteToken } = useToken({
    address: launchpad?.quoteToken,
    chainId: launchpad?.chainId,
    enabled: !launchpad?.isQuoteETH,
  });

  const [decimals, setDecimals] = useState(18);
  useEffect(() => {
    const handleCheckDecimal = () => {
      if (launchpad?.isQuoteETH) {
        setDecimals(18);
      } else {
        setDecimals(quoteToken?.decimals || 9);
      }
    };

    handleCheckDecimal();
  }, [quoteToken, decimals, launchpad?.isQuoteETH]);

  const { data: currentCap } = usePresaleContract({
    contractAdrress: launchpad?.saleAddress,
    functionName: "currentCap",
    chainId: launchpad?.chainId,
  });

  const {data : whitelisted} = usePresaleContract({
    contractAdrress: launchpad?.saleAddress,
    functionName: "whitelisteds",
    chainId: launchpad?.chainId,
    enabled: !!account,
    args: [account]
  })

  const {data : purchaseDetails} = usePresaleContract({
    contractAdrress: launchpad?.saleAddress,
    functionName: "purchaseDetails",
    chainId: launchpad?.chainId,
    enabled: !!account,
    args: [account]
  })

  const progress = currentCap ?
    (Number(formatUnits(currentCap as BigNumberish, decimals)) * 100) /
    Number(launchpad?.fHardCap) : 0

  return {
    unit,
    startTime: launchpad.startTime * 1000,
    endTime: launchpad.endTime * 1000,
    startTimeFormatted,
    endTimeFormatted,
    quoteToken,
    whitelisteds: whitelisted ? whitelisted : false,
    decimals,
    currentCap: currentCap
      ? formatUnits(currentCap as BigNumberish, decimals)
      : 0,
    progress,
    purchaseDetails: (purchaseDetails as any)?.result ? formatUnits((purchaseDetails as any).result[1] , decimals) : 0,
  };
};
