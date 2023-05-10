import About from "@/components/about-page/About";
import PageHero from "@/components/ui/PageHero";
import React from "react";

const about: React.FC = () => {
  return (
    <>
      <PageHero image="/images/owners1.jpg" alt="Mario and Adrian" />
      <About />
    </>
  );
};
export default about;
