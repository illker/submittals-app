import { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import { API_URL } from "../api/constants";

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

const TableEntries = () => {
  const [apiData, setData] = useState([]);

  const getData = () => {
    const endpoint = "/get";
    axios
      .get(`${API_URL}${endpoint}`)
      .then((response) => {
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {apiData?.map((entries) => {
        return (
          <StyledTableRow key={entries?.title}>
            <StyledTableCell component="th">{entries?.status}</StyledTableCell>
            <StyledTableCell align="right">{entries.number}</StyledTableCell>
            <StyledTableCell align="left">{entries.spec}</StyledTableCell>
            <StyledTableCell align="left">{entries.rev}</StyledTableCell>
            <StyledTableCell align="left">{entries.title}</StyledTableCell>
            <StyledTableCell align="left">{entries.type}</StyledTableCell>
            <StyledTableCell align="left">{entries.priority}</StyledTableCell>
            <StyledTableCell align="left">{entries.package}</StyledTableCell>
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableEntries;
