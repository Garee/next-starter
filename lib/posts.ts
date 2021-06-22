import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostData {
  id: string;
  date: string;
  title: string;
  content: string;
}

export async function getSortedPostsData(): Promise<PostData[]> {
  const fileNames: string[] = fs.readdirSync(postsDirectory);

  const allPostsData: Promise<PostData>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return await getPostData(id);
  });

  return Promise.all(allPostsData).then((allPostsData) => {
    return allPostsData.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      }
      return 0;
    });
  });
}

export function getAllPostIds(): Array<{ params: { id: string } }> {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const contentHtml = await (
    await remark().use(html).process(matterResult.content)
  ).toString();

  return {
    id,
    content: contentHtml,
    ...matterResult.data,
  } as PostData;
}
