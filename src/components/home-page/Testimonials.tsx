import React from "react";
import classes from "./Testimonials.module.scss";

// type TestimonialsProps = {};

const Testimonials: React.FC = () => {
  return (
    <section className={classes.testimonials}>
      <h1>They All Love Little Lemon</h1>
      <p>
        Come experience our delicious food and irrresistible hospitality and
        share your Little Lemon story.
      </p>
      <div className={classes["testimonials-list"]}>
        <p>Testimonials coming soon...</p>
      </div>
    </section>
  );
};
export default Testimonials;
