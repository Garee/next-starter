import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

interface ProjectsProps {
  title: string;
  description: string;
  projects: ProjectData[];
}

interface ProjectData {
  id: number;
  title: string;
}

export default function Projects({
  title,
  description,
  projects,
}: ProjectsProps) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <br />
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ProjectsProps> =
  async () => {
    const contentDirectory = path.join(process.cwd(), "pages/content");
    const about = fs.readFileSync(
      path.join(contentDirectory, "projects.json"),
      "utf-8"
    );

    // Generate a random number of projects using a PRNG API.
    const data = await fetch(
      "https://csrng.net/csrng/csrng.php?min=1&max=5"
    ).then((res) => res.json());
    const nProjects = data[0].random;
    const projects = [];
    for (let i = 1; i <= nProjects; i++) {
      projects.push({
        id: i,
        title: `Project ${i}`,
      });
    }

    const { title, description } = JSON.parse(about);
    return { props: { title, description, projects } };
  };
