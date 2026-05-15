/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders a <article> element", () => {
  const { container } = render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  expect(container.querySelector("article")).toBeInTheDocument();
});

test("renders a <h3> with the title of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const h3 = screen.queryByText(/Components 101/);
  expect(h3).toBeInTheDocument();
  expect(h3.tagName).toBe("H3");
});

test("renders a <small> with the date of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const small = screen.queryByText(/December 15, 2020/);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("renders a <p> with the preview text", () => {
  const preview = "Setting up the building blocks of your site";
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={preview}
    />
  );
  const p = screen.queryByText(preview);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders reading time when minutes prop is provided", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
      minutes={5}
    />
  );
  expect(screen.getByText("5 min read")).toBeInTheDocument();
});
