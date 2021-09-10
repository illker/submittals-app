import { render, screen, cleanup } from "@testing-library/react";
import UpdateSubmittal from "../UpdateSubmittal";

afterEach(() => {
  cleanup()
})

test("should render component UpdateSubmittal", () => {
  render(<UpdateSubmittal />);
  const Element = screen.getByTestId("update-submittal");
  expect(Element).toBeInTheDocument();
});

test("should have the button tag", () => {
  render(<UpdateSubmittal />);
  const Element = screen.getAllByRole("button");
  expect(Element).toBeTruthy();
});

cleanup()