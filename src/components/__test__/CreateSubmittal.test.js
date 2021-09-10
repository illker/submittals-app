import { render, screen, cleanup } from "@testing-library/react";
import CreateSubmittal from "../CreateSubmittal";

afterEach(() => {
  cleanup()
})

test("should render component CreateSubmittal", () => {
  render(<CreateSubmittal />);
  const logoElement = screen.getByTestId("create-submittal");
  expect(logoElement).toBeInTheDocument();
});

test("should have the button tag", () => {
  render(<CreateSubmittal />);
  const logoElement = screen.getAllByRole("button");
  expect(logoElement).toBeTruthy();
});

cleanup()