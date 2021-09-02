import { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SubmittalsForm from '../components/SubmittalForm'

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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    borderRadius: '30px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "15%",
    left: "30%",
  },
}));

const CreateSubmittal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const body = (
    <div  className={classes.paper}>
      <h2 id="simple-modal-title">Create Item</h2>
      <p id="simple-modal-description">
        text
      </p>
      <SubmittalsForm/>
    </div>
  );
  return (
    <div>
      <StyledButton variant="contained" onClick={handleOpen}>
        + Create Item
      </StyledButton>
      <Modal open={open} onClose={handleOpen}>
        {body}
      </Modal>
    </div>
  );
};

export default CreateSubmittal;
