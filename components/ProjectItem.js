/* eslint-disable react/jsx-key */

import styles from "@/styles/ProjectItem.module.css";
import Image from "next/image";
import Link from "next/link";
const ProjectItem = ({ project }) => {
  return (
    <>
      <div className={styles.event}>
        <div className={styles.img}>
          <Image
            src={"/images/docker_hecker_thumbnail.png"}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={styles.info}>
          <span>
            {new Date(project.date).toLocaleDateString("en-GB")} at{" "}
            {project.time}
          </span>
          <h3>{project.name}</h3>
          <div className={styles.link}>
            <Link href={`/projects/${project.slug}`}>
              <a className={"btn"}>moar details</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
