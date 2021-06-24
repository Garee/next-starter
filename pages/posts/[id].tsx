import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.scss";

// Next.js supports pages with dynamic routes.
// For example, if you create a file called pages/posts/[id].js,
// then it will be accessible at posts/1, posts/2, etc.
//
// https://nextjs.org/docs/routing/introduction#dynamic-route-segments

type PostProps = PostData;

export default function Post({ title, date, rating, content }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
      <br />
      <small>{`⭐`.repeat(rating)}</small>
      <br />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostData> = async ({
  params,
}: GetStaticPropsContext) => {
  let postData: PostData = {
    id: "",
    title: "",
    date: "",
    content: "",
    rating: 3,
  };

  if (typeof params?.id === "string") {
    postData = await getPostData(params.id);
  }

  return {
    props: postData,
  };
};

// The page paths depend on external data.
export const getStaticPaths: GetStaticPaths = async (
  _context: GetStaticPathsContext
) => {
  const paths = getAllPostIds();
  return {
    paths, // Pre-render these at build-time.
    fallback: false, // Other routes should 404.
  };
};
