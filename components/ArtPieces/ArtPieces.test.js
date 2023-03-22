import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

const pieces = [
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
  },
];

test("renders title?", () => {
  render(<ArtPieces pieces={pieces} />);
  const title = screen.getByRole("heading", {
    name: "Orange Red and Green Abstract Painting",
  });
  expect(title).toBeInTheDocument();
});

test("renders artist?", () => {
  render(<ArtPieces pieces={pieces} />);
  const quote = screen.getByText("Steve Johnson", {});
  expect(quote).toBeInTheDocument();
});

test("renders list?", () => {
  render(<ArtPieces pieces={pieces} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("renders image?", () => {
  render(<ArtPieces pieces={pieces} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
