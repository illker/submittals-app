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
import TopBar from "../components/TopBar";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const topBar = {
  "status": 'Status',
  "number": "#",
  "spec": "Spec",
  "rev": "Rev",
  "title": "Title",
  "type": "Type",
  "priority": "Priority",
  "package": "Package"
}

function TableData(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TopBar props={topBar} />
        </TableHead>
        <TableBody>
          <TableEntries />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableData;
