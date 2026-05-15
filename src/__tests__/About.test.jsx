/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import logo from "../assets/logo";

test("renders a <aside> element", () => {
  const { container } = render(<About about="Test" />);
  expect(container.querySelector("aside")).toBeInTheDocument();
});

test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  render(<About image={logo} about="Test" />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(logo);
});

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About about="Test about" />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215");
});

test("renders a <p> with the about text", () => {
  render(<About about="About this blog" />);
  const p = screen.queryByText("About this blog");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("updates content when props change", () => {
  const { rerender } = render(
    <About image="https://example.com/logo1.jpg" about="First description" />
  );
  
  expect(screen.getByText("First description")).toBeInTheDocument();
  
  rerender(
    <About image="https://example.com/logo2.jpg" about="Second description" />
  );
  
  expect(screen.getByText("Second description")).toBeInTheDocument();
});
