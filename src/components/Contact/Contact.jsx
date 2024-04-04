import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneSquare } from "react-icons/fa";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { ContactEditForm } from "../ContactEditForm/ContactEditForm";

export const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={css.card} id={item.id}>
      {!isEditing ? (
        <div>
          <div className={css.userWrap}>
            <FaUser className={css.icon} />
            <p>{item.name}</p>
          </div>
          <div className={css.userWrap}>
            <FaPhoneSquare className={css.icon} />
            <p>{item.number}</p>
          </div>
        </div>
      ) : (
        <ContactEditForm item={item} setEdit={setIsEditing} />
      )}
      {!isEditing && (
        <>
          <button onClick={handleDelete} type="button" className={css.dltBtn}>
            D
          </button>
          <button
            onClick={() => setIsEditing(true)}
            type="button"
            className={css.dltBtn}
          >
            E
          </button>
        </>
      )}
    </li>
  );
};
