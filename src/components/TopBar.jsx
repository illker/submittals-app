import { withStyles } from "@material-ui/core/styles";
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

const TopBar = ({ props }) => {
  return (
    <TableRow data-testid="top-bar">
      {props?.map((value) => {
        return <StyledTableCell key={value}>{value}</StyledTableCell>;
      })}
    </TableRow>
  );
};

export default TopBar;
