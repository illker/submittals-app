import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

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

const CreateSubmittal = () => {
  return (
    <div>
      <StyledButton variant="contained">+ Create Item</StyledButton>
    </div>
  );
};

export default CreateSubmittal;
