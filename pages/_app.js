import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import "../src/app/globals.css"
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}