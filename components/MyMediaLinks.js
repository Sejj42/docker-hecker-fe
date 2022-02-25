/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import styles from "@/styles/MyMediaLinks.module.css";

const MyMediaLinks = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="blank"
        className={styles.social}
      >
        <FontAwesomeIcon
          icon={faYoutube}
          size="2x"
          className={styles.youtube}
        />
      </a>
      <a href="#" target="blank" className={styles.social}>
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className={styles.linkedin}
        />
      </a>
      <a href="#" target="blank" className={styles.social}>
        <FontAwesomeIcon icon={faGithub} size="2x" className={styles.github} />
      </a>
      <a target="blank" className={styles.social} href="#">
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          className={styles.twitter}
        />
      </a>
    </div>
  );
};

export default MyMediaLinks;
