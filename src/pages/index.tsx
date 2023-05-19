import { Inter } from "next/font/google";
import Hero from "@/components/home-page/Hero";
import AboutBrief from "@/components/home-page/AboutBrief";
import MenuHighlight from "@/components/home-page/MenuHighlight";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { connectDatabase, getAllDocuments } from "@/helpers/db-util";

type Meal = {
  _id: string;
  category: string;
  description: string;
  image: string;
  isFeatured: boolean;
  price: number;
  title: string;
  slug: string;
};

export const getStaticProps: GetStaticProps<{ meals: Meal[] }> = async () => {
  const client = await connectDatabase();

  if (!client) {
    throw new Error("Could not connect to the database!");
  }

  const res = await getAllDocuments(
    client,
    "menu",
    "all-meals",
    {},
    { isFeatured: true }
  );

  if (!res) {
    throw new Error("Could not fetch meals from the database!");
  }

  const meals: Meal[] = JSON.parse(JSON.stringify(res));

  client.close;

  return {
    props: {
      meals,
    },
    revalidate: 60,
  };
};

const HomePage = ({
  meals,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero />
      <MenuHighlight meals={meals} />
      <AboutBrief />
    </>
  );
};

export default HomePage;
