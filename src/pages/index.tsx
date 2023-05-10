import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/home-page/Hero";
import AboutBrief from "@/components/home-page/AboutBrief";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBrief />
    </>
  );
}
