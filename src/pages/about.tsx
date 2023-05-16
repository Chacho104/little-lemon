import About from "@/components/about-page/About";
import PageHero from "@/components/ui/PageHero";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHero image="/images/site/owners1.jpg" alt="Mario and Adrian" />
      <About />
    </>
  );
};
export default AboutPage;
