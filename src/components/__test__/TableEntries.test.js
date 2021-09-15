import { render, screen, waitFor, cleanup, act } from "@testing-library/react";
import TableEntries from "../TableEntries";
import mockAxios from "axios";
import { jssPreset } from "@material-ui/core";
import useGetSubmittal from "../../hooks/useGetSubmittal";
import "@testing-library/jest-dom/extend-expect";
import { API_URL } from "../../api/constants";

jest.mock("axios");

afterEach(() => {
  cleanup();
});

test("should render component TableEntries", () => {
  render(
    <table>
      <tbody>
        <TableEntries />
      </tbody>
    </table>
  );
  const Element = screen.getByTestId("table-entries");
  expect(Element).toBeInTheDocument();
});

test("should have the td table data tag", () => {
  render(
    <table>
      <tbody>
        <TableEntries />
      </tbody>
    </table>
  );
  const Element = screen.getAllByRole("cell");
  expect(Element).toBeTruthy();
});

it("fecth display table data", () => {
act(() => {
  const { isLoading, isError, apiData } = useGetSubmittal(API_URL);

})
expect(isloading).toBeTruthy()
});

cleanup();
