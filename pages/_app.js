import React from "react";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { SSRProvider } from 'react-bootstrap';
import { useEffect } from "react";
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import ('bootstrap/dist/js/bootstrap.js')
    }, []);
  return (
    <React.Fragment>
        <SSRProvider>
                <Layout>
            <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    </React.Fragment>
   
  )
}