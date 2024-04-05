import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import { ContactEditForm } from "../ContactEditForm/ContactEditForm";

export const ContactEditModal = ({ data, setEdit }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <EditNoteSharpIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ContactEditForm item={data} setEdit={handleClose} />
        </Box>
      </Modal>
    </>
  );
};
