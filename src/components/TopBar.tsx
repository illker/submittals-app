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

interface TopBarProps {
  titles: string[];
}

const TopBar: React.FC<TopBarProps> = ({ titles }) => {
  return (
    <TableRow data-testid="top-bar">
      {titles?.map((value: string) => {
        return <StyledTableCell key={value}>{value}</StyledTableCell>;
      })}
    </TableRow>
  );
};

export default TopBar;
