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
    return (
        <div>
            
        </div>
    )
}

export default TableEntries
