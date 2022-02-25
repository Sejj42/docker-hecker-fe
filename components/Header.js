/* eslint-disable react/jsx-key */
import styles from "@/styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>docker hecker home</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/projects">
              <a>projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>abouet</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contect</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
