/* eslint-disable react/jsx-key */
import Layout from "@/components/Layout";
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";
import { API_URL } from "@/config/index";

export default function Home({ projects }) {
  return (
    <Layout>
      <h1>some docker hecking projects</h1>
      {projects.length === 0 && (
        <h3>docker hecker 4got to add projects. plz be patient</h3>
      )}

      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}

      {projects.length > 0 && (
        <Link href="/projects">
          <a className="btn-secondary">moar projects</a>
        </Link>
      )}
    </Layout>
  );
}

const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/projects?`);
  const projects = await res.json();

  return {
    props: {
      projects: projects.slice(0, 3),
    },
  };
};

export { getStaticProps };
