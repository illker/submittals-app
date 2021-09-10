import { render, screen, cleanup } from "@testing-library/react";
import TopBar from "../TopBar";

afterEach(() => {
  cleanup()
})

test("should render component TopBar", () => {
  render(<table><tbody><TopBar /></tbody></table>);
  const Element = screen.getByTestId("top-bar");
  expect(Element).toBeInTheDocument();
});

test("should have the tr table row tag", () => {
  render(<table><tbody><TopBar /></tbody></table>);
  const Element = screen.getAllByRole("row");
  expect(Element).toBeTruthy();
});

cleanup()