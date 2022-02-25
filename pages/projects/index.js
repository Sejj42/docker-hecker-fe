/* eslint-disable react/jsx-key */
import Layout from "@/components/Layout";
import ProjectItem from "@/components/ProjectItem";
import { API_URL } from "@/config/index";
import Link from "next/link";

const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <h1>all docker hecking projects</h1>
      {projects.length === 0 && (
        <h3>plz wait for docker hecker to publish more projects</h3>
      )}

      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
      <Link href="/">&larr; dock heck home</Link>
    </Layout>
  );
};

export default ProjectsPage;

const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/projects`);
  const projects = await res.json();

  return {
    props: {
      projects: projects,
    },
  };
};

export { getServerSideProps };
