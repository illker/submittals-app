import { render, screen, cleanup } from "@testing-library/react";
import SubmittalForm from "../SubmittalForm";

afterEach(() => {
  cleanup();
});

test("should render component SubmittalForm", () => {
  render(<SubmittalForm />);
  const Element = screen.getByTestId("submittal-form");
  expect(Element).toBeInTheDocument();
});

test("should have the form tag", () => {
  render(<SubmittalForm />);
  const Element = screen.getAllByRole("textbox");
  expect(Element).toBeTruthy();
});

cleanup();
