import renderer from "react-test-renderer";
import Projects from "../../pages/projects";

describe("projects page", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const props = { title: "", description: "", projects: [] };
    const post = <Projects {...props} />;
    const tree = renderer.create(post).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
