import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Layout from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData, PostData } from "../lib/posts";
import { appName } from "../lib/config";
import { redirectToAdminOnLogin } from "../lib/netlify-identity";
import utilStyles from "../styles/utils.module.scss";

// A page is a React Component exported from a .js, .jsx, .ts, or .tsx file
// in the pages directory.
//
// Pages are associated with a route based on their file name.

interface HomeProps {
  greeting: string;
  description: string;
  allPosts: PostData[];
}

export default function Home({
  greeting,
  description,
  allPosts,
}: HomeProps): JSX.Element {
  useEffect(() => redirectToAdminOnLogin(), []);

  return (
    <Layout home>
      <Head>
        <title>{appName}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{greeting}</p>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <p>
          Check out this{" "}
          <Link href="/projects">
            <a>example page</a>
          </Link>{" "}
          and the{" "}
          <Link href="/admin">
            <a>CMS</a>
          </Link>
          .
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// By default, Next.js pre-renders every page.
// Next.js has two forms of pre-rendering:
// 1. Static Generation (Recommended): The HTML is generated at build time
// and will be reused on each request.
// 2. Server-side Rendering: The HTML is generated on each request.

// The page content depends on external data.
// Runs at build time in production.
// Runs on each request in development mode.
// Only runs server-side.

// Get external data from the file system, API, DB etc.

// API route calls cannot be made in getStaticProps as they fail during
// production builds.
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const contentDirectory = path.join(process.cwd(), "pages/content");
  const about = fs.readFileSync(
    path.join(contentDirectory, "about.json"),
    "utf-8"
  );
  const { greeting, description } = JSON.parse(about);
  const allPosts = await getSortedPostsData();
  return { props: { greeting, description, allPosts } };
};
