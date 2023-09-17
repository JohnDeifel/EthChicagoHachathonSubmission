// pages/index.tsx

import React from 'react';
import styles from './NFTTradingRoom.module.css';
import { RainbowKitCustomConnectButton } from '../components/scaffold-eth/RainbowKitCustomConnectButton';
import { RainbowKitTraderConnectButton } from '../components/scaffold-eth/RainbowKitTraderConnectButton';


const NFTTradingRoom: React.FC = () => {
    return (
        <div className={styles.tradingRoom}>

            {/* Left: Your Wallet + Your NFTs */}
            <div className={styles.column}>
                <div className={styles.wallet}>
                    <RainbowKitCustomConnectButton />
                </div>
                <div className={styles.nftCollection}>
                    Your NFTs (Drag & Drop your NFTs here)
                </div>
            </div>

            {/* Middle: Trading Table */}
            <div className={styles.column}>
                <div className={styles.tradingTable}>
                    Drop NFTs here for trading...
                </div>
                <div className={styles.tradeValue}>
                    Trade Value: $0
                </div>
                <button className={styles.tradeButton}>
                    Make a Trade
                </button>
            </div>

            {/* Right: Trader's Wallet + Trader's NFTs */}
            <div className={styles.column}>
                <div className={styles.wallet}>
                    <RainbowKitTraderConnectButton />
                </div>
                <div className={styles.nftCollection}>
                    Traders NFTs (Drag & Drop traders NFTs here)
                </div>
            </div>

        </div>
    );
}

export default NFTTradingRoom;
