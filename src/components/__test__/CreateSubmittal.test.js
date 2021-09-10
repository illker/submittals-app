import { render, screen, cleanup } from "@testing-library/react";
import CreateSubmittal from "../CreateSubmittal";

afterEach(() => {
  cleanup()
})

test("should render component CreateSubmittal", () => {
  render(<CreateSubmittal />);
  const Element = screen.getByTestId("create-submittal");
  expect(Element).toBeInTheDocument();
});

test("should have the button tag", () => {
  render(<CreateSubmittal />);
  const Element = screen.getAllByRole("button");
  expect(Element).toBeTruthy();
});

cleanup()