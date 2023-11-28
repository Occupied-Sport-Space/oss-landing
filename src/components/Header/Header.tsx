import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/OSS.svg";
import useWindowWidth from "../../helpers/useWindowWidth";
import styles from "./Header.module.scss";

const Nav = () => (
  <>
    <a
      target="_blank"
      href="https://youtu.be/fC7oUOUEEi4?si=hiEYg30G3vVbYwLK"
      className={styles.button}
      rel="noreferrer"
    >
      Home
    </a>
    <a
      target="_blank"
      href="https://youtu.be/fC7oUOUEEi4?si=hiEYg30G3vVbYwLK"
      className={styles.button}
      rel="noreferrer"
    >
      About us
    </a>
    <a
      target="_blank"
      href="https://youtu.be/fC7oUOUEEi4?si=hiEYg30G3vVbYwLK"
      className={styles.button}
      rel="noreferrer"
    >
      Waitlist
    </a>
    <a
      target="_blank"
      href="https://youtu.be/fC7oUOUEEi4?si=hiEYg30G3vVbYwLK"
      className={styles.button}
      rel="noreferrer"
    >
      Contact us!
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
        {/* {isMobile ? (
          open ? (
            <AiOutlineClose onClick={() => setOpen(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setOpen(true)} />
          )
        ) : (
          <div className={styles.navContainer}>
            <MobileNav />
          </div>
        )}
        {open && isMobile && (
          <div className={styles.mobileNav}>
            <MobileNav />
          </div>
        )} */}
      </div>
    </div>
  );
};
