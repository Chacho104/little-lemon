import MenuDisplay from "@/components/menu-page/menu-markup/MenuDisplay";
import PageHero from "@/components/ui/PageHero";
import React from "react";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { connectDatabase, getAllDocuments } from "../../helpers/db-util";

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

  const res = await getAllDocuments(client, "menu", "all-meals");

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

const MenuPage = ({
  meals,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageHero image="/images/site/menuhero.jpg" alt="Table full of food" />
      <MenuDisplay
        title="Order for Delivery"
        description="Check out all our available meals and drinks. If you love to enjoy
            your meals at home, pick your favorite(s) from the categories below,
            add to basket and order online, and we will deliver swiftly!"
        meals={meals}
      />
    </>
  );
};

export default MenuPage;
