import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SubmittalForm from "./SubmittalForm";
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
  console.log(id);
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <StyledButton onClick={handleOpen}>Update</StyledButton>
      <Modal open={openModal} onClose={handleOpen}>
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Update Item</h2>
          <p id="simple-modal-description">text</p>
          <SubmittalForm title={"Update"} id={id} />
        </div>
      </Modal>
    </>
  );
};

export default UpdateSubmittal;
