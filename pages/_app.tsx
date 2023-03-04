import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Layout } from "../layouts/Layouts";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="mb-8">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className="">
        <Footer />
      </div>
    </Layout>
  );
}

export default MyApp;
