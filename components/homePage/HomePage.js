import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import sspImage from "../../public/images/ssp animation 3_6 1.svg"
import picture1 from "../../public/images/Screenshot 2023-10-25 at 11.56 2.svg";
import icons from "../../public/images/icons.svg"
export function HomePage(){
    return(
        <section className={styles.section1}>
            <div className="container">
                <div className="row">
                   <div className="col-lg-7 mb-5">
                    <h1>Secure, Simple,<br/> Powerful</h1><br/>
                    <a href="#"> Get Started</a>
                    <Image alt="ssp-animation" src={sspImage}/>
                   </div>
                   <div className="col-lg-5">
                    <div className={styles.card1}>
                        <h3>Revolutionize </h3>
                        <h6>your wallet with <span>ssp</span></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                        <div className={styles.cardPicture}>
                        <Image alt="picture" src={picture1} />
                        </div>
                        
                        <div className={styles.icons}>
                        <Image alt="picture" src={icons} />
                        </div>
                    
                   </div>
                </div>
            </div>
        </section>
    )
}