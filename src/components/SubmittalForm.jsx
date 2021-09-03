import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { API_URL } from "../api/constants";
import axios from "axios";

const StyledButton = withStyles((theme) => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#0696d7",
    "&:hover": {
      backgroundColor: "#faa21b",
    },
    margin: "20px",
  },
}))(Button);

const SubmittalForm = () => {
  const [formValues, setFormValues] = useState({ status: "Opened" });
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
    postData();
  };

  const postData = async () => {
    const endpoint = "/post";
    try {
      const post = await axios.post(`${API_URL}${endpoint}`, formValues);
    } catch (err) {
      setError(true);
    }
  };

  // useEffect(() => {
  //   postData();
  // }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Status"
        fullWidth
        autocomplete="none"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <TextField label="Number" fullWidth autocomplete="none" />
      <TextField label="Spec" fullWidth autocomplete="none" />
      <TextField label="Rev" fullWidth autocomplete="none" />
      <TextField label="Title" fullWidth autocomplete="none" />
      <TextField label="Type" fullWidth autocomplete="none" />
      <StyledButton type="submit">Create</StyledButton>
    </form>
  );
};

export default SubmittalForm;
