import React from "react";
import Head from 'next/head'
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";

import { useEffect } from "react";
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import ('bootstrap/dist/js/bootstrap.js')
    }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <React.Fragment>

                <Layout>
            <Component {...pageProps} />
            </Layout>

    </React.Fragment>
   
    </>
   
  )
}