import Link from "next/link";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import DropMenu from "./DropMenu";
import classes from "./Navbar.module.scss";
import BasketIcon from "../basket/BasketIcon";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function closeDropMenu() {
    setToggleMenu(false);
  }
  function showDropMenu() {
    setToggleMenu(true);
  }
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <span>
            <img src="/images/site/Logo.svg" alt="Little Lemon logo" />
          </span>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/reservations">Reservations</Link>
            </li>
            <li>
              <Link href="/login">Log In</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
          <span>
            <BasketIcon />
          </span>
        </nav>
      </header>
      <header className={classes["alt-header"]}>
        <nav className={classes["alt-nav"]}>
          <span className={classes.menu}>
            {toggleMenu ? (
              <span className={classes.toggleLinks}>
                <RiCloseLine onClick={closeDropMenu} />
              </span>
            ) : (
              <span className={classes.toggleLinks}>
                <GiHamburgerMenu onClick={showDropMenu} />
              </span>
            )}
            {toggleMenu && <DropMenu onClick={closeDropMenu} />}
          </span>
          <span>
            <img src="/images/site/Logo.svg" alt="Little Lemon Logo" />
          </span>
          <span>
            <BasketIcon />
          </span>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
