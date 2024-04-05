import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneSquare } from "react-icons/fa";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { ContactEditForm } from "../ContactEditForm/ContactEditForm";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(data.id));
  const [isEditing, setIsEditing] = useState(false);

  return (
    // <div className={css.card} id={data.id}>
    //   <Paper>
    //     {!isEditing ? (
    //       <div>
    //         <div className={css.userWrap}>
    //           <FaUser className={css.icon} />
    //           <p>{data.name}</p>
    //         </div>
    //         <div className={css.userWrap}>
    //           <FaPhoneSquare className={css.icon} />
    //           <p>{data.number}</p>
    //         </div>
    //       </div>
    //     ) : (
    //       <ContactEditForm item={data} setEdit={setIsEditing} />
    //     )}
    //     {!isEditing && (
    //       <>
    //         <button onClick={handleDelete} type="button" className={css.dltBtn}>
    //           D
    //         </button>
    //         <button
    //           onClick={() => setIsEditing(true)}
    //           type="button"
    //           className={css.dltBtn}
    //         >
    //           E
    //         </button>
    //       </>
    //     )}
    //   </Paper>
    // </div>

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
            <Typography variant="body1">{data.number}</Typography>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <IconButton onClick={() => setIsEditing(true)}>
            <EditNoteSharpIcon />
          </IconButton>

          <IconButton onClick={handleDelete}>
            <DeleteOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
