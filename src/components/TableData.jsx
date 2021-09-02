import { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { getData } from "../api/getData";
// import axios from "axios";
// import { API_URL } from "../api/constants";
import TableEntries from "../components/TableEntries";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0696d7",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f0f0",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function TableData(props) {
  const [apiData, setData] = useState([]);
  const classes = useStyles();

  // const getDatax = () => {
  //   const endpoint = "/get";
  //   axios
  //     .get(`${API_URL}${endpoint}`)
  //     .then((response) => {
  //       const data = response.data.data;
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell align="right">#</StyledTableCell>
            <StyledTableCell align="left">Spec</StyledTableCell>
            <StyledTableCell align="left">Rev</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Priority</StyledTableCell>
            <StyledTableCell align="left">Package</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableEntries />
          {/* {apiData?.map((entries) => {
            return (
              <StyledTableRow key={entries.title}>
                <StyledTableCell component="th">
                  {entries.status}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {entries.number}
                </StyledTableCell>
                <StyledTableCell align="left">{entries.spec}</StyledTableCell>
                <StyledTableCell align="left">{entries.rev}</StyledTableCell>
                <StyledTableCell align="left">{entries.title}</StyledTableCell>
                <StyledTableCell align="left">{entries.type}</StyledTableCell>
                <StyledTableCell align="left">
                  {entries.priority}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {entries.package}
                </StyledTableCell>
              </StyledTableRow>
            );
          })} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableData;
