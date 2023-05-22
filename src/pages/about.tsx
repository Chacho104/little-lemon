import About from "@/components/about-page/About";
import PageHero from "@/components/ui/PageHero";
import Head from "next/head";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Little Lemon</title>
        <meta
          name="description"
          content="Meet the Little Lemon team and find out what's makes us the preferred restaurant of many locals!"
        />
      </Head>
      <PageHero image="/images/site/owners1.jpg" alt="Mario and Adrian" />
      <About />
    </>
  );
};
export default AboutPage;
