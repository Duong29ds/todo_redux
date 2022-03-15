import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Task.module.css";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid rgba(0,0,0,0.5)",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
};

const styleButtons = {
  fontSize: "1.5rem",
};

const Task = (props) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(props.description);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const taskList = useSelector((state) => state.taskList);

  const { completed } = taskList.filter((task) => task.id === props.id)[0];

  const handleChange = () => {
    dispatch({ type: "changeCheck", id: props.id });
    console.log(completed);
  };

  const handleDelete = () => {
    dispatch({ type: "deleteTask", id: props.id });
  };

  const handleChangeInput = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: "editTask", id: props.id, description: description });
    handleClose();
  };
  return (
    <div className={classes.task}>
      <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
        checked={completed}
        onChange={handleChange}
      />
      <p className={classes.task_title}>{props.description}</p>
      <div className={classes.task_btn_box}>
        <Stack direction="row" spacing={2}>
          <Button color="secondary" onClick={handleOpen} sx={styleButtons}>
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={styleButtons}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Stack>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              type="text"
              className={classes.form_input}
              value={description}
              description={description}
              onChange={handleChangeInput}
            />
            <button className={classes.form_btn} onClick={handleSubmit}>
              submit
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Task;
