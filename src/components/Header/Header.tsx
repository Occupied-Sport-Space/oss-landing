/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/OSS.svg";
import useWindowWidth from "../../helpers/useWindowWidth";
import styles from "./Header.module.scss";

const Nav = () => (
  <>
    <a href="#heroSection" className={styles.button} rel="noreferrer">
      Home
    </a>
    <a href="#about" className={styles.button} rel="noreferrer">
      About us
    </a>
    <a href="#contact" className={styles.button} rel="noreferrer">
      Contact us!
    </a>
    <a
      href="/download/final_demo.apk"
      download
      className={styles.downloadButton}
    >
      Download demo!
    </a>
  </>
);

export const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useWindowWidth() <= 767;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="OSS logo" />
        {isMobile ? (
          open ? (
            <AiOutlineClose onClick={() => setOpen(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setOpen(true)} />
          )
        ) : (
          <div className={styles.navContainer}>
            <Nav />
          </div>
        )}
        {open && isMobile && (
          <div className={styles.mobileNav}>
            <Nav />
          </div>
        )}
      </div>
    </div>
  );
};
