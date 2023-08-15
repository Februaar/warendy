import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox + " inner "}>
        <div>Copyright © 2023 Warendy Inc. All rights reserved.</div>
        <div className={styles.policy}>
          Privacy Policy | Terms of Use | Legal{" "}
        </div>
        <div>Republic of Korea</div>
      </div>
    </footer>
  );
};

export default Footer;
