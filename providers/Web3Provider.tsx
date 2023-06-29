"use client";

import ClientOnly from "@/components/ClientOnly";
import { web3Config } from "@/configs/web3Config";
import { WagmiConfig } from "wagmi";

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <WagmiConfig config={web3Config}>{children}</WagmiConfig>
    </ClientOnly>
  );
};

export default Web3Provider;
