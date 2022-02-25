/* eslint-disable react/jsx-key */
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/ProjectPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectPage = ({ project }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.project}>
        <div className={styles.controls}></div>
        <span>
          {new Date(project.date).toLocaleDateString("en-GB")} at {project.time}
        </span>
        <h1>{project.name}</h1>
        <div className={styles.image}>
          <Image
            src={"/images/docker_hecker_512x512.png"}
            alt=""
            width={260}
            height={260}
          />
        </div>
        <h3>Performers:</h3>
        <p>{project.performers}</p>
        <h3>Description:</h3>
        <p>{project.description}</p>
        <h3>Venue: {project.venue}</h3>
        <p>{project.address}</p>
        <Link href="/project">
          <a className={styles.back}>&larr; dock heck home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default ProjectPage;

const getServerSideProps = async ({ query: { slug } }) => {
  const res = await fetch(`${API_URL}/projects/${slug}`);
  const projects = await res.json();

  return {
    props: {
      project: projects[0],
    },
  };
};

export { getServerSideProps };
