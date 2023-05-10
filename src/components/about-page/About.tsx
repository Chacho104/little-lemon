import React from "react";

import { TfiLocationPin } from "react-icons/tfi";
import { BsClockHistory } from "react-icons/bs";

import classes from "./About.module.scss";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className={classes.about}>
      <h1>About</h1>
      <div className={classes.description}>
        <p>
          Little Lemon (co-founded by Mario Stefano and Adrian Demphris) is a
          vibrant Chicago restaturant focused on serving traditional recipes in
          a modern setting. Little Lemon celebrates the best of traditional
          Mediterranean dishes with irresistible hospitality and service. You
          can enjoy our dishes wherever you are through the swift and reliable{" "}
          <Link href="/menu">order online service,</Link> or secure a table at
          the restaurant through the{" "}
          <Link href="/reservations">reserve a table</Link> feature. Most
          welcome!
        </p>
      </div>
      <h1>Locations & Opening Hours</h1>
      <div className={classes.branch} id={classes.reverse}>
        <div>
          <Image
            src="/images/restaurant.jpg"
            alt="Little Lemon Restaraunt at 11th Street"
            width={448}
            height={544}
          />
        </div>
        <div className={classes.content}>
          <h2>Little Lemon 11th Street</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            esse quia ipsam dolore. Necessitatibus maiores, rerum quas
            laudantium ea ut voluptate placeat, molestias similique porro quod
            officia? Maiores, impedit fugiat!
          </p>
          <div className={classes.contact}>
            <div className={classes["contact-item"]}>
              <TfiLocationPin className={classes.icon} />
              <span>Jurassic Building, Ground Floor, 11th Street.</span>
            </div>
            <div className={classes["contact-item"]}>
              <BsClockHistory className={classes.icon} />
              <span>Open everyday 10 AM to Midnight</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.branch}>
        <div className={classes.content}>
          <h2>Little Lemon 13th Street</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos,
            dolore sapiente ducimus maiores quis iure quasi officia cupiditate
            dignissimos unde pariatur, tenetur ex, aliquam eum repellendus
            ratione incidunt molestiae.
          </p>
          <div className={classes.contact}>
            <div className={classes["contact-item"]}>
              <TfiLocationPin className={classes.icon} />
              <span>Gracer Building, 2nd Floor, 13th Street.</span>
            </div>
            <div className={classes["contact-item"]}>
              <BsClockHistory className={classes.icon} />
              <span>Open everyday 10 AM to Midnight</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/chicago2.jpg"
            alt="Little Lemon Restaraunt at 13th Street"
            width={448}
            height={544}
          />
        </div>
      </div>
      <h1>The Team</h1>
      <div className={classes.team}>
        <div className={classes.member}>
          <Image
            src="/images/mario.jpg"
            alt="Co-founder Mario Stefano"
            width={288}
            height={336}
          />
          <h3>Mario Stefano</h3>
          <p>Co-founder</p>
        </div>
        <div className={classes.member}>
          <Image
            src="/images/adrian.jpg"
            alt="Co-founder Adrian Demphris"
            width={288}
            height={336}
          />
          <h3>Adrian Demphris</h3>
          <p>Co-founder</p>
        </div>
        <div className={classes.member}>
          <Image
            src="/images/headchef2.jpg"
            alt="Head of Operations"
            width={288}
            height={336}
          />
          <h3>Julie Sharpe</h3>
          <p>Head of Operations</p>
        </div>
      </div>
    </section>
  );
};
export default About;
