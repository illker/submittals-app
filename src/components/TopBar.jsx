import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0696d7",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TopBar = ({props}) => {
    
  return (
    <>
      <TableRow>
        <StyledTableCell>{props.status}</StyledTableCell>
        <StyledTableCell align="right">#</StyledTableCell>
        <StyledTableCell align="left">Spec</StyledTableCell>
        <StyledTableCell align="left">Rev</StyledTableCell>
        <StyledTableCell align="left">Title</StyledTableCell>
        <StyledTableCell align="left">Type</StyledTableCell>
        <StyledTableCell align="left">Priority</StyledTableCell>
        <StyledTableCell align="left">Package</StyledTableCell>
      </TableRow>
    </>
  );
};

export default TopBar;
