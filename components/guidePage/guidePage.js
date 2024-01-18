/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import Image1 from "../../public/images/Screenshot 2023-10-25 at 11.56 2.svg"
import { VideoComponent2 } from "../videoComponent/videoComponent2";
export function GuidePage(){
    return(
        <section className={styles.section1}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 mb-5">
                        <div className={styles.card}>
                            <VideoComponent2/>
                            <h6 className="mt-3">Video Info Here</h6>
                            <p>This video showcases how the process of sending Bitcoin is secured.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-5">
                        <div className={styles.card2}>
                            <h3>GUIDE</h3>
                            <p>How to Install SSp Wallet and SSP Key:</p>
                            <p>Part One: Installing SSP Wallet</p>
                            <ul>
                                <li>Open your Chromium browser and navigate to the SSP Wallet extension page using the following link: SSP Wallet Extension <a href="#">(https://chromewebstore.google.com/detail/ssp-wallet/mgfbabcnedcejkfibpafadgkhmkifhbd)</a></li>
                                <li>Click "Add to Chrome." A pop-up window will appear, asking if you want to add the SSP Wallet extension. Click "Add" to complete the installation. SSP is now added to your browser. </li>
                                <li>Locate the SSP wallet logo in your browser and click on it. Follow the prompts to get started.</li>
                                <li>Create your password. Please carefully read the SSP Wallet Disclaimer and acknowledge your agreement.</li>
                                <li>Click "Create Wallet."</li>
                                <li>To secure your wallet, click "Show Mnemonic Wallet Seed Phrase." Store the seed phrase securely and confirm that you have done so.</li>
                                <li>Click "Create Wallet" to finalize the process.</li>
                                </ul>
                                <ul>
                                <p>Part Two: Installing SSP Key on Mobile Device</p>
                                <li>Download SSP Key on your mobile device and open the application. </li>
                                <li>Set an SSP Key password and confirm it. Then, click "Setup Key." </li>
                                <li>To secure your key, click "Show Mnemonic Key Seed Phrase." Store the key seed phrase securely and confirm that you have backed it up in a secure location. </li>
                                <li>Click "Setup Key." SSP Key serves as a second authentication factor for your SSP Wallet.</li>
                                <li>Click "Scan Code" to synchronize your SSP Key with SSP Wallet. Scan the QR code displayed on your browser using the SSP Key mobile application. </li>
                                <li>Click "Approve Synchronization" and confirm with your Key password. You will be notified that the synchronization was successful. Congratulations!By following these steps, you have successfully installed and set up both SSP Wallet and SSP Key, ensuring a secure and seamless user experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}