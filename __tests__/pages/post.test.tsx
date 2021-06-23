import renderer from "react-test-renderer";
import Post from "../../pages/posts/[id]";

describe("postPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const postData = {
      id: "1",
      date: "2021-01-01",
      title: "Post #1",
      content: "Sample content.",
    };
    const post = <Post postData={postData} />;
    const tree = renderer.create(post).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
