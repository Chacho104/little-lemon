import React from "react";

import classes from "./Hero.module.scss";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <main className={classes["hero-section"]}>
      <section className={classes.hero}>
        <div className={classes.content}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button type="button" link="/reservations">
            Reserve a Table
          </Button>
        </div>
        <div className={classes.image}>
          <img src="/images/site/restauranfood.jpg" alt="Little Lemon Chef" />
        </div>
      </section>
    </main>
  );
};
export default Hero;
