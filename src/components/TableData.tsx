import {
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@material-ui/core";
import TableEntries from "../components/TableEntries";
import TopBar from "../components/TopBar";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const topBar: string[] = [
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

const TableData: React.FC = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} data-testid="table-data">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TopBar titles={topBar} />
        </TableHead>
        <TableBody>
          <TableEntries />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
