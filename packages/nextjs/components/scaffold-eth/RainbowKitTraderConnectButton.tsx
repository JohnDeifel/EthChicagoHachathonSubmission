import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BlockieAvatar, Balance } from "~~/components/scaffold-eth";
import { useNetworkColor } from "~~/hooks/scaffold-eth";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitTraderConnectButton = () => {
  const networkColor = useNetworkColor();

  return (
    <ConnectButton.Custom>
      {({ account, chain, mounted }) => {
        const connected = mounted && account && chain;

        if (!connected) {
          return (
            <button className="btn btn-primary btn-sm" type="button">
              Connect Wallet
            </button>
          );
        }

        return (
          <div className="px-2 flex justify-end items-center">
            <div className="flex flex-col items-center mr-1">
              <Balance address={account.address} className="min-h-0 h-auto" />
              <span className="text-xs" style={{ color: networkColor }}>
                {chain.name}
              </span>
            </div>
            <BlockieAvatar address={account.address} size={24} ensImage={account.ensAvatar} />
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
