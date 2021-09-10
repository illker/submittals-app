import { render, screen, cleanup } from "@testing-library/react";
import Logo from "../Logo";

afterEach(() => {
  cleanup()
})

test("should render component Logo", () => {
  render(<Logo />);
  const logoElement = screen.getByTestId("logo");
  expect(logoElement).toBeInTheDocument();
});

test("should have the submittals-logo.svg", () => {
  render(<Logo />);
  const logoElement = screen.getAllByRole("img");
  expect(logoElement).toBeTruthy();
});

cleanup()