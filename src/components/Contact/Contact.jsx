import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { ContactEditModal } from "../ContactEditModal/ContactEditModal";

export const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(data._id));

  return (
    <div>
      <Card
        elevation={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex">
            <PersonIcon fontSize="small" />
            <Typography noWrap={true} variant="body1" align="justify">
              {data.name}
            </Typography>
          </Box>

          <Box display="flex">
            <PhoneAndroidIcon fontSize="small" />
            <Typography variant="body1">
              {data.number ? data.number : "No number"}
            </Typography>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* <IconButton onClick={() => setIsEditing(true)}>
            <EditNoteSharpIcon />
          </IconButton> */}

          <ContactEditModal data={data} />
          <IconButton onClick={handleDelete}>
            <DeleteOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
