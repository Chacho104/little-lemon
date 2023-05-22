import AuthPageBg from "@/components/ui/AuthPageBg";
import Head from "next/head";
import React from "react";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Little Lemon Sign Up</title>
        <meta
          name="description"
          content="Enjoy personalized services when you sign up for a Little Lemon account!"
        />
      </Head>
      <AuthPageBg>
        <p>This is the Sign Up Page...</p>
      </AuthPageBg>
    </>
  );
};
export default SignupPage;
