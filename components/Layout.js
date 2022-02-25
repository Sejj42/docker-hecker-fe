/* eslint-disable react/jsx-key */
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase />}

      <div className={styles.container}>{children}</div>

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "docker hecker",
  description: "follow docker hecker's hecking adventures",
  keywords: "docker, docker hecker, hecker, hacker",
};

export default Layout;
