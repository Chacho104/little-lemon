import Reservations from "@/components/reservations-page/Reservations";
import Head from "next/head";
import React from "react";

const ReservationsPage = () => {
  return (
    <>
      <Head>
        <title>Reserve a Table</title>
        <meta
          name="description"
          content="Find and reserve a table for any occasion at Little Lemon!"
        />
      </Head>
      <Reservations />
    </>
  );
};
export default ReservationsPage;
