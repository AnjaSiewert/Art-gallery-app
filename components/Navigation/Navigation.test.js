import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders links", () => {
  render(<Navigation />);
  const spotlight = screen.getByRole("link", { name: /spotlight/i });
  const pieces = screen.getByRole("link", { name: /pieces/i });
  const favorites = screen.getByRole("link", { name: /favorites/i });
  expect(favorites).toBeInTheDocument();
  expect(spotlight).toBeInTheDocument();
  expect(pieces).toBeInTheDocument();
});
