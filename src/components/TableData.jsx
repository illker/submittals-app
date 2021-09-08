import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableEntries from "../components/TableEntries";
import TopBar from "../components/TopBar";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const topBar = [
  "Status",
  "#",
  "Spec",
  "Rev",
  "Title",
  "Type",
  "Priority",
  "Package",
  "Update",
];

console.log(Object.keys(topBar));
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
