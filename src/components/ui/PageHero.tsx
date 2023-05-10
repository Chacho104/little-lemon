import React from "react";
import classes from "./PageHero.module.scss";

type PageHeroProps = {
  image: string;
  alt: string;
};

const PageHero: React.FC<PageHeroProps> = ({ image, alt }) => {
  return (
    <section className={classes.hero}>
      <img src={image} alt={alt} />
    </section>
  );
};
export default PageHero;
