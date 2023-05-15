import React from "react";

import classes from "./AboutBrief.module.scss";
import Link from "next/link";
import Image from "next/image";

const AboutBrief: React.FC = () => {
  return (
    <section className={classes.about}>
      <div className={classes.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          temporibus porro autem dicta atque doloremque accusamus consequuntur,
          quaerat facere architecto distinctio tempora rerum soluta corrupti
          quibusdam explicabo repellat quos sunt?
        </p>
        <Link href="/about">Learn More</Link>
      </div>
      <div className={classes["owners-img"]}>
        <div className={classes.firstImage}>
          <Image
            src="/images/site/owners1.jpg"
            alt="Mario and Adrian"
            width={288}
            height={352}
          />
        </div>
        <div className={classes.secondImage}>
          <Image
            src="/images/site/owners2.jpg"
            alt="Mario and Adrian"
            width={288}
            height={352}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutBrief;
