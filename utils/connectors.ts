const connectorIcons: { [key: string]: string } = {
  metaMask: "/images/connectors/metamask.svg",
  coinbaseWallet: "/images/connectors/coinbase.svg",
  walletConnect: "/images/connectors/wallet-connect.svg",
  okxWallet: "/images/connectors/okc.svg",
  ledger: "/images/connectors/ledger.svg",
  safe: "/images/connectors/safe.svg"
};

export function getConnectorIcon(
  id: "metaMask" | "coinbaseWallet" | "walletConnect" | "okxWallet" | "ledger" | string
) {
  return connectorIcons[id];
}
