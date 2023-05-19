import MenuItemDetails from "@/components/menu-page/menu-markup/MenuItemDetails";
import { connectDatabase, getAllDocuments } from "@/helpers/db-util";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

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

export const getStaticPaths: GetStaticPaths = async () => {
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
    throw new Error("Could not fetch data from the database!");
  }

  const meals: Meal[] = JSON.parse(JSON.stringify(res));

  client.close();

  const paths = meals.map((meal: any) => ({ params: { slug: meal.slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ meal: Meal[] }> = async (
  context
) => {
  const { slug } = context.params as IParams;

  const client = await connectDatabase();

  if (!client) {
    throw new Error("Could not connect to the database!");
  }

  const res = await getAllDocuments(
    client,
    "menu",
    "all-meals",
    {},
    { slug: slug }
  );

  if (!res) {
    throw new Error(
      "Could not fetch details for selected meal from the database!"
    );
  }

  const meal: Meal[] = JSON.parse(JSON.stringify(res));

  client.close();

  return {
    props: {
      meal,
    },
    revalidate: 30,
  };
};

const mealDetailsPage = ({
  meal,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {meal.map((meal: any) => (
        <MenuItemDetails
          key={meal._id}
          id={meal._id}
          title={meal.title}
          description={meal.description}
          image={meal.image}
          price={meal.price}
        />
      ))}
    </>
  );
};

export default mealDetailsPage;
