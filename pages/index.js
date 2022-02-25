/* eslint-disable react/jsx-key */
import Layout from "@/components/Layout";
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";

export default function Home({ projects }) {
  return (
    <Layout>
      <h1>my hecking projects</h1>
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
  const res = await fetch("http://localhost:3000/api/projects");
  const projects = await res.json();
  console.log(res);

  return {
    props: {
      projects: projects,
    },
  };
};

export { getStaticProps };
