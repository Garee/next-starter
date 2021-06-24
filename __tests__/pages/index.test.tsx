import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import posts from "../mocks/posts";
import Index from "../../pages/index";

describe("index page", () => {
  const props = { greeting: "Hey 👋", description: "", allPosts: posts };
  const index = <Index {...props} />;

  it("renders correctly", () => {
    expect.assertions(1);
    const tree = renderer.create(index).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with author header", () => {
    expect.assertions(1);
    render(index);
    const heading = screen.getByText("Gary Blackwood");
    expect(heading).toBeInTheDocument();
  });
});
