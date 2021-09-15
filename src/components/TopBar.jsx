import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from 'prop-types'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0696d7",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TopBar = ({ topBar }) => {
  return (
    <TableRow data-testid="top-bar">
      {topBar?.map((value) => {
        return <StyledTableCell key={value}>{value}</StyledTableCell>;
      })}
    </TableRow>
  );
};

TopBar.propTypes = {
  topBar: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TopBar;
