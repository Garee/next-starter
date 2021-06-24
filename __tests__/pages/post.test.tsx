import renderer from "react-test-renderer";
import Post from "../../pages/posts/[id]";

describe("post page", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const props = {
      id: "1",
      date: "2021-01-01",
      title: "Post #1",
      content: "Sample content.",
      rating: 3,
    };
    const post = <Post {...props} />;
    const tree = renderer.create(post).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
