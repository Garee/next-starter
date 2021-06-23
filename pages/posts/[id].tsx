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

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <small className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </small>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
}: GetStaticPropsContext) => {
  let postData: PostData = { id: "", title: "", date: "", content: "" };

  if (typeof params?.id === "string") {
    postData = await getPostData(params.id);
  }

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  _context: GetStaticPathsContext
) => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
