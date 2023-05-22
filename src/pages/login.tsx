import AuthPageBg from "@/components/ui/AuthPageBg";
import Head from "next/head";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Little Lemon Log In</title>
        <meta
          name="description"
          content="Log in to your Little Lemon account to continue enjoying personalized services!"
        />
      </Head>
      <AuthPageBg>
        <p>This is the Log In Page...</p>
      </AuthPageBg>
    </>
  );
};
export default LoginPage;
