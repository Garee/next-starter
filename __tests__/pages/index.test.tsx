import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Index from "../../pages/index";

describe("indexPage", () => {
  const allPosts = [
    {
      id: "1",
      date: "2021-01-01",
      title: "Post #1",
      content: "Sample content.",
    },
  ];
  const index = <Index greeting="Hey 👋" allPosts={allPosts} />;

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
