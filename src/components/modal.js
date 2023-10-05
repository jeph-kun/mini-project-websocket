import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import x from "../images/assets/Close.svg";
import calendar from "../images/assets/calendar-days-regular 1.svg";
import PaperClip from "../images/assets/PaperClip.svg";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  borderRadius: "10px",
  height: "300px;",
  width: "500px;",
  boxShadow: 24,
  p: 2,
};

const ButtonStyle = {
  fontWeight: 'bold',
  borderRadius: "10px",
  textTransform: "capitalize",
  backgroundColor: "#53C01E",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#388E13",
    boxShadow: "none",
  },
};

export default function CreateMeetingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={ButtonStyle} onClick={handleOpen}>
        Create Meeting
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fade-in-element dflex flex-column" sx={style}>
          <div className="dflex space-between">
            <Typography
              className=""
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <img src={calendar} className="svg-20" />
              Create Meeting
            </Typography>
            <Button onClick={handleClose} sx={{}}>
              <img src={x} />
            </Button>
          </div>
          <div className="modal-body dflex flex-column flex-center flex-1 ">
            <label className="py-10">
              <bold>Meeting Name</bold>
            </label>
            <TextField
              hiddenLabel
              id="filled-basic"
              variant="filled"
              size="small"
            />
            <span className="py-10">
              <img src={PaperClip} />
              <button className="copy-link-btn">Copy Link</button>
            </span>
          </div>
          <div className="dflex flex-end">
            <Button sx={ButtonStyle}>
              Create Meeting
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
