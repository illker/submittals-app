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
        <StyledTableCell align="right">{props.number}</StyledTableCell>
        <StyledTableCell align="left">{props.spec}</StyledTableCell>
        <StyledTableCell align="left">{props.rev}</StyledTableCell>
        <StyledTableCell align="left">{props.title}</StyledTableCell>
        <StyledTableCell align="left">{props.type}</StyledTableCell>
        <StyledTableCell align="left">{props.priority}</StyledTableCell>
        <StyledTableCell align="left">{props.package}</StyledTableCell>
      </TableRow>
    </>
  );
};

export default TopBar;
