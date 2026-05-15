/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  const { container } = render(<Header name="Test" />);
  expect(container.querySelector("header")).toBeInTheDocument();
});

test("renders a <h1> with the blog name", () => {
  render(<Header name="Underreacted" />);
  const h1 = screen.queryByText("Underreacted");
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("displays different names when passed different props", () => {
  const { rerender } = render(<Header name="First Blog" />);
  expect(screen.getByText("First Blog")).toBeInTheDocument();
  
  rerender(<Header name="Second Blog" />);
  expect(screen.getByText("Second Blog")).toBeInTheDocument();
});
