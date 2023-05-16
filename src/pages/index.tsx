import { Inter } from "next/font/google";
import Hero from "@/components/home-page/Hero";
import AboutBrief from "@/components/home-page/AboutBrief";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutBrief />
    </>
  );
};

export default HomePage;
