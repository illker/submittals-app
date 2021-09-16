import { useState } from "react";
import Button from '@mui/material/Button';
import { makeStyles, withStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import SubmittalForm from "./SubmittalForm";

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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    borderRadius: "30px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "15%",
    left: "30%",
  },
}));

const UpdateSubmittal = ({ id }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <StyledButton onClick={handleOpen} data-testid="update-submittal">Update</StyledButton>
      <Modal open={openModal} onClose={handleOpen}>
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Update Item</h2>
          <p id="simple-modal-description">Please fill the fields to update</p>
          <SubmittalForm title={"Update"} id={id} />
        </div>
      </Modal>
    </>
  );
};

export default UpdateSubmittal;
