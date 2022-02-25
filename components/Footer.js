/* eslint-disable react/jsx-key */
import styles from "@/styles/Footer.module.css";
import MyMediaLinks from "./MyMediaLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy;dockerhecker.com 2022</p>
      <br />
      <MyMediaLinks />
    </footer>
  );
};

export default Footer;
