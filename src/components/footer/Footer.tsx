import React from "react";

import classes from "./Footer.module.scss";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-items"]}>
        <div className={classes.socials}>
          <ul>
            <li>
              <Link href="littlelemon@instagram.com">
                <BsInstagram className={classes.icon} />
              </Link>
            </li>
            <li>
              <Link href="littlelemon@facebook.com">
                <BsFacebook className={classes.icon} />
              </Link>
            </li>
            <li>
              <Link href="littlelemon@twitter.com">
                <BsTwitter className={classes.icon} />
              </Link>
            </li>
            <li>
              <Link href="littlelemon@tiktok.com">
                <FaTiktok className={classes.icon} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.links}>
          <ul>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>&copy; Little Lemon 2023 | All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
