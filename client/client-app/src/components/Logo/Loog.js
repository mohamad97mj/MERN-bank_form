import React from "react";
import styles from "./Logo.module.css"


import bankLogo from '../../assests/images/logo.png';

const logo = (props) => (
    <a>
        <img className={styles.Logo} src={bankLogo} alt="banken"/>
    </a>
);

export default logo;