import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

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
