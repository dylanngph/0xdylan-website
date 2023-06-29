import { createConfig, configureChains, Chain } from "wagmi";
import {
  mainnet,
  bsc,
  bscTestnet,
  polygon,
  arbitrum,
  klaytn,
  okc,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { SafeConnector } from "wagmi/connectors/safe";

const supportedChains = {
  ethereum: mainnet,
  bsc,
  bscTestnet,
  polygon,
  arbitrum,
  klaytn,
  okc,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [...Object.entries(supportedChains).map(([_, value]) => value)],
  [publicProvider()]
);

export const chainInfo = [
  {
    chainId: supportedChains.bsc.id,
    iconUrl: "/images/chains/bsc.svg",
    name: "Binance Smart Chain",
  },
  {
    chainId: supportedChains.okc.id,
    iconUrl: "/images/chains/okc.svg",
    name: "OKExChain",
  },
  {
    chainId: supportedChains.ethereum.id,
    iconUrl: "/images/chains/ethereum.svg",
    name: "Ethereum",
  },
  {
    chainId: supportedChains.polygon.id,
    iconUrl: "/images/chains/polygon.svg",
    name: "Polygon",
  },
  {
    chainId: supportedChains.bscTestnet.id,
    iconUrl: "/images/chains/bsc.svg",
    name: "Binance Smart Chain Testnet",
  },
  {
    chainId: supportedChains.arbitrum.id,
    iconUrl: "/images/chains/arbitrum.svg",
    name: "Arbitrum",
  },
  {
    chainId: supportedChains.klaytn.id,
    iconUrl: "/images/chains/klaytn.png",
    name: "Klaytn",
  },
];

export const CHAIN_INFO_MAP: { [chainId: number]: Chain } = chains.reduce(
  (o, chain: any) => {
    o[chain.id] = chain;
    return o;
  },
  {} as any
);

export const web3Config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
        UNSTABLE_shimOnConnectSelectAccount: true,
      }
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "bionstart",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "085117be4f5a845d2662cafef9ca4f33",
        showQrModal: true,
      },
    }),
    // new SafeConnector({
    //   chains,
    //   options: {
    //     allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
    //     debug: false,
    //   },
    // }),
  ],
  publicClient,
  webSocketPublicClient,
});
