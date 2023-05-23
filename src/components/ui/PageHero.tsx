import React from "react";
import classes from "./PageHero.module.scss";
import Image from "next/image";

type PageHeroProps = {
  image: string;
  alt: string;
};

const PageHero: React.FC<PageHeroProps> = ({ image, alt }) => {
  return (
    <section className={classes.hero}>
      <Image src={image} alt={alt} width={900} height={600} />
    </section>
  );
};
export default PageHero;
