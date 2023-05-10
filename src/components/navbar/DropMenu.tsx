import Link from "next/link";
import React, { MouseEventHandler } from "react";
import classes from "./DropMenu.module.scss";

type DropMenuProps = {
  onClick: MouseEventHandler;
};

const DropMenu: React.FC<DropMenuProps> = ({ onClick }) => {
  return (
    <section className={classes["drop-menu"]}>
      <ul className={classes.navList}>
        <li>
          <Link href="/" onClick={onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={onClick}>
            About
          </Link>
        </li>
        <li>
          <Link href="/menu" onClick={onClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link href="/reservations" onClick={onClick}>
            Reservations
          </Link>
        </li>
        <li>
          <Link href="/login" onClick={onClick}>
            Log In
          </Link>
        </li>
        <li>
          <Link href="/signup" onClick={onClick}>
            Sign Up
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default DropMenu;
