import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import footerLogo from "../../public/images/footer.svg";

export function Footer(){
    return(
        <React.Fragment>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <a href="#"><Image alt="logo" src={footerLogo}/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}