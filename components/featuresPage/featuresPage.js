import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import card1Img from "../../public/images/card1-img.svg"
import card2Img from "../../public/images/card2-img.svg"
import card3Img from "../../public/images/card3-img.svg"
import IconLogo from "../../public/images/Icon Logo Black.svg";
export function FeaturesPage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>TOP BEST FEATURES</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.card1}>
                            <div className="row">
                            <div className="col-md-7">
                                <div className={styles.cardText}>
                                <div>
                                <h3>Revolutionize </h3>
                                <h6>your wallet with <span>ssp</span></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
                                <a href="#">Button1</a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className={styles.cardImg}>
                                <Image alt="img" src={card1Img}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={styles.card1}>
                            <div className="row">
                          
                            <div className="col-md-5 order-1">
                                <div className={styles.cardImg}>
                                <Image alt="img" src={card2Img}/>
                                </div>
                            </div>
                            <div className="col-md-7 order-0 order-md-2">
                                <div className={styles.cardText}>
                                <div>
                                <h3>FEATURE 2</h3>
                                {/* <h6>your wallet with <span>ssp</span></h6> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
                                <a href="#">Button2</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={styles.card1}>
                            <div className="row">
                            <div className="col-md-7">
                                <div className={styles.cardText}>
                                <div>
                                <h3>FEATURE 3</h3>
                                {/* <h6>your wallet with <span>ssp</span></h6> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
                                <a href="#">Button3</a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className={styles.cardImg}>
                                <Image alt="img" src={card3Img}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className={styles.card2}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={styles.card2Text}>
                                    <Image alt="logo" src={IconLogo}/>
                                    <h6>ADDITIONAL INFO</h6>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <div className={styles.btns}>
                            <a className={styles.btn4}>Button 4</a>
                            <a className={styles.btn5}>Button 5</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}