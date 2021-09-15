import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { API_URL } from "../api/constants";
import axios from "axios";

const StyledButton = withStyles(() => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#0696d7",
    "&:hover": {
      backgroundColor: "#faa21b",
    },
    margin: "20px",
  },
}))(Button);

interface formProps {
  title: string;
  id: string;

}

const SubmittalForm: React.FC<formProps> = ({ title, id }) => {
  const [formValues, setFormValues] = useState({});
  const [isError, setError] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
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
    <form onSubmit={handleSubmit} data-testid="submittal-form">
      <TextField
        label="Status"
        name="status"
        defaultValue=""
        autoComplete="none"
        value={formValues.status}
        onChange={handleInputChange}
        className="inputField"
      />
      <TextField
        label="Number"
        name="number"
        autoComplete="none"
        value={formValues.number}
        onChange={handleInputChange}
      />
      <TextField
        label="Spec"
        fullWidth
        name="spec"
        autoComplete="none"
        value={formValues.spec}
        onChange={handleInputChange}
      />
      <TextField
        label="Rev"
        name="rev"
        autoComplete="none"
        value={formValues.rev}
        onChange={handleInputChange}
      />
      <TextField
        label="Title"
        fullWidth
        name="title"
        autoComplete="none"
        value={formValues.title}
        onChange={handleInputChange}
      />
      <TextField
        label="Type"
        fullWidth
        name="type"
        autoComplete="none"
        value={formValues.type}
        onChange={handleInputChange}
      />
      <TextField
        label="Priority"
        name="priority"
        autoComplete="none"
        value={formValues.priority}
        onChange={handleInputChange}
      />
      <TextField
        label="Package"
        name="package"
        autoComplete="none"
        value={formValues.package}
        onChange={handleInputChange}
      />
      {isError &&
        (isError === "Succeed 🚀" ? (
          <>
            <p>{isError}</p>
          </>
        ) : (
          <>
            <p>❌⚠️ Error ❌⚠️</p>
          </>
        ))}
      <StyledButton type="submit">+ {title}</StyledButton>
    </form>
  );
};

export default SubmittalForm;
