import React from "react";
import styles from "../css/style.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
const Marquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span>⚡ Spring Clearance Event: Save Up to 70% &nbsp;</span>
        <span>⚡ Spring Clearance Event: Save Up to 70% &nbsp;</span>
        <span>⚡ Spring Clearance Event: Save Up to 70% &nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;
