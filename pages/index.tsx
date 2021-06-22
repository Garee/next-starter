import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData, PostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.scss";

interface HomeProps {
  greeting: string;
  allPosts: PostData[];
}

export default function Home({ greeting, allPosts }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{greeting}</p>
        <p>This is a simple starter template for a Next.js web application</p>
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

// Runs at build time in production.
// Runs on each request in development mode.
// Only runs server-side.
// Can only be exported from a page.
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Get external data from the file system, API, DB etc.

  // API route calls cannot be made in getStaticProps as they fail during
  // production builds.
  /*const greeting = await fetch(`${server}/api/greeting`)
    .then((res) => res.json())
    .then((data) => data.greeting);*/

  const greeting = "Hey 👋";
  const allPosts = await getSortedPostsData();

  // The value of the 'props' key is passed to the component.
  return { props: { greeting, allPosts } };
};
