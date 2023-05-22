import Layout from "@/components/layout/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Little Lemon Restaurant</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Welcome to Little Lemon, a mediterranean restaurant serving traditional recipes with a modern twist!"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
