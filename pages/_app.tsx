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
      <div className="">
        <Component {...pageProps} />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </Layout>
  );
}

export default MyApp;
