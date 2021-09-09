import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { API_URL } from "../api/constants";
import UpdateSubmital from "../components/UpdateSubmittal";
import useGetSubmittal from "../hooks/useGetSubmittal";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0696d7",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f0f0",
    },
  },
}))(TableRow);

const TableEntries = () => {
  // // custom hook useGetSubmittal to fetching data
  const { isLoading, isError, apiData } = useGetSubmittal(API_URL);

  if (isLoading) {
    return (
      <StyledTableRow>
        <StyledTableCell> Loading... ⏳</StyledTableCell>
      </StyledTableRow>
    );
  }
  if (isError) {
    return (
      <StyledTableRow>
        <StyledTableCell>❌⚠️ Error getting data...</StyledTableCell>
      </StyledTableRow>
    );
  }

  return (
    <>
      {apiData?.map((entries) => {
        return (
          <StyledTableRow key={entries.id}>
            <StyledTableCell component="th">{entries.status}</StyledTableCell>
            <StyledTableCell align="left">{entries.number}</StyledTableCell>
            <StyledTableCell align="left">{entries.spec}</StyledTableCell>
            <StyledTableCell align="left">{entries.rev}</StyledTableCell>
            <StyledTableCell align="left">{entries.title}</StyledTableCell>
            <StyledTableCell align="left">{entries.type}</StyledTableCell>
            <StyledTableCell align="left">{entries.priority}</StyledTableCell>
            <StyledTableCell align="left">{entries.package}</StyledTableCell>
            {entries?.id && (
              <StyledTableCell align="left">
                <UpdateSubmital id={entries.id} />
              </StyledTableCell>
            )}
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableEntries;
