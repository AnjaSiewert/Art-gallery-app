import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("renders a headline", () => {
  const pieces = [
    {
      slug: "orange-red-green",
      name: "Orange Red and Green Abstract Painting",
    },
  ];
  render(<ArtPieces pieces={pieces} />);
  const headline = screen.getByRole("heading", {
    name: "Orange Red and Green Abstract Painting",
  });
  expect(headline).toBeInTheDocument();
});
