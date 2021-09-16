import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { API_URL } from "../api/constants";
import axios from "axios";
import "../assets/css/Style.css";


/**
 * Submittal Form Component to grab user input
 * @param {String} title - "Create" or "Update" value for Title props from CreateSubmittal and UpdateSubmittal
 * @param {String} id - id from submittal to update
 */

const SubmittalForm = ({ title, id }) => {
  const [formValues, setFormValues] = useState({});
  const [isError, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    title === "Create" ? postData() : pacthData();
    setError(false);
  };

  const postData = async () => {
    const endpoint = "/data";
    try {
      await axios.post(`${API_URL}${endpoint}`, formValues);
    } catch (err) {
      setError(true);
    }
  };

  const pacthData = async () => {
    const endpoint = `/data/${id}`;
    try {
      await axios.patch(`${API_URL}${endpoint}`, formValues);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      data-testid="submittal-form"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Status"
        name="status"
        defaultValue=""
        autoComplete="none"
        value={formValues.status}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Number"
        name="number"
        autoComplete="none"
        value={formValues.number}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Spec"
        fullWidth
        name="spec"
        autoComplete="none"
        value={formValues.spec}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Rev"
        name="rev"
        autoComplete="none"
        value={formValues.rev}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Title"
        fullWidth
        name="title"
        autoComplete="none"
        value={formValues.title}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Type"
        fullWidth
        name="type"
        autoComplete="none"
        value={formValues.type}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Priority"
        name="priority"
        autoComplete="none"
        value={formValues.priority}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      <TextField
        label="Package"
        name="package"
        autoComplete="none"
        value={formValues.package}
        onChange={handleInputChange}
        style={{ marginTop: 11 }}
      />
      {isError &&
        (isError ? (
          <>
            <p>Succeed 🚀</p>
          </>
        ) : (
          <>
            <p>❌⚠️ Error ❌⚠️</p>
          </>
        ))}
      <Button variant="contained" type="submit" style={{ marginTop: 11 }}>+ {title}</Button>
    </Box>
  );
};

export default SubmittalForm;
