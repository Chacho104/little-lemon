import Checkout from "@/components/checkout-page/Checkout";
import Head from "next/head";
import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Order Online</title>
        <meta
          name="description"
          content="Place an order for your favorite food or drink and we will deliver swiftly to your doorstep!"
        />
      </Head>
      <Checkout />
    </>
  );
};
export default CheckoutPage;
