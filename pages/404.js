/* eslint-disable react/jsx-key */

import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { GiSpermWhale, GiWhaleTail } from "react-icons/gi";
const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <span>
            <GiSpermWhale />{" "}
          </span>
          404
        </h1>
        <h2>
          <span>
            <GiWhaleTail />
          </span>
          <span>
            <GiWhaleTail />
          </span>
          <span>
            <GiWhaleTail />
          </span>
          <span>
            <GiWhaleTail />
          </span>
          <span>
            <GiWhaleTail />
          </span>
        </h2>
        <h2>Sorry, this page does not exist.</h2>
        <br />
        <Link href="/">&larr; Return Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
