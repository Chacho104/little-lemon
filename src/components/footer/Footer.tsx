import React from "react";

import classes from "./Footer.module.scss";

import { TfiLocationPin } from "react-icons/tfi";
import { SlPhone, SlEnvelopeOpen } from "react-icons/sl";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className={classes.footer}>
        <nav className={classes.bottNav}>
          <section className={classes.logo}>
            <Link href="/">
              <img src="/images/site/Logo.svg" alt="Little Lemon Logo" />
            </Link>
          </section>
          <section className={classes.item}>
            <h1>Useful Links</h1>
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
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </section>
          <section className={classes.item}>
            <h1>Contacts</h1>
            <ul>
              <li>
                <TfiLocationPin className={classes.icon} /> 132, My FoodStreet,
                Chicago
              </li>
              <li>
                <SlPhone className={classes.icon} /> +1 (508) 767-1176
              </li>
              <li>
                <SlEnvelopeOpen className={classes.icon} />{" "}
                inquiries@littlelemon.com
              </li>
            </ul>
          </section>
          <section className={classes.item}>
            <h1>Social Media Links</h1>
            <ul>
              <li>
                <a href="littlelemon@instagram.com">
                  <BsInstagram className={classes.icon} />
                </a>
              </li>
              <li>
                <a href="littlelemon@facebook.com">
                  <BsFacebook className={classes.icon} />
                </a>
              </li>
              <li>
                <a href="littlelemon@twitter.com">
                  <BsTwitter className={classes.icon} />
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </footer>
      <div className={classes.copyright}>
        <p>&copy; Little Lemon 2023 | All Rights Reserved</p>
      </div>
    </>
  );
};
export default Footer;
