import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaLongArrowAltRight,
} from "react-icons/fa";

import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.content}>
        <h1>Contact us!</h1>
        <div className={styles.socMedias}>
          <a
            href="https://www.facebook.com/profile.php?id=61553950084414"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={35} />
          </a>
          <a
            href="https://www.instagram.com/occupiedsportspace/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare size={35} />
          </a>
          <a
            href="https://www.linkedin.com/company/ocuppied-sport-space-oss/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
        <span className={styles.email}>
          For more information about the company and/or opportunity to invest:{" "}
          <a href="mailto:occupiedsportspace@gmail.com">
            occupiedsportspace@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
