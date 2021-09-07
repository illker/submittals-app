import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import { API_URL } from "../api/constants";
import UpdateSubmital from "../components/UpdateSubmittal";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0696d7",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f0f0",
    },
  },
}))(TableRow);

const TableEntries = () => {
  const [apiData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // const getDataAxios = useAxios(get, API_URL)

  const getData = async () => {
    const endpoint = "/data";
    try {
      const response = await axios.get(`${API_URL}${endpoint}`);
      setIsLoading(false);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <StyledTableRow>
        <StyledTableCell> Loading... ⏳</StyledTableCell>
      </StyledTableRow>
    );
  }
  if (isError) {
    return (
      <StyledTableRow>
        <StyledTableCell>❌⚠️ Error getting data...</StyledTableCell>
      </StyledTableRow>
    );
  }

  return (
    <>
      {apiData?.map((entries) => {
        return (
          <StyledTableRow key={entries.id}>
            <StyledTableCell component="th">{entries.status}</StyledTableCell>
            <StyledTableCell align="right">{entries.number}</StyledTableCell>
            <StyledTableCell align="left">{entries.spec}</StyledTableCell>
            <StyledTableCell align="left">{entries.rev}</StyledTableCell>
            <StyledTableCell align="left">{entries.title}</StyledTableCell>
            <StyledTableCell align="left">{entries.type}</StyledTableCell>
            <StyledTableCell align="left">{entries.priority}</StyledTableCell>
            <StyledTableCell align="left">{entries.package}</StyledTableCell>

            {entries.id && <UpdateSubmital value={entries.id} />}
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableEntries;
