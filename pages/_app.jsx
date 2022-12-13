import "../styles/globals.css";
import App from "next/app";
import Layout from "../components/Layout.js";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps, spotData, bandData }) {
  return (
    <Layout spotData={spotData}>
      <Component {...pageProps} bandData={bandData} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("https://proud-star-2129.fly.dev/available-spots/");
  const band = await fetch("https://proud-star-2129.fly.dev/bands/");
  const bandData = await band.json();
  const spotData = await res.json();
  return { ...appProps, spotData, bandData };
};
