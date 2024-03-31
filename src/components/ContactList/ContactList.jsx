import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contactsSlice";
import { Loader } from "../Loader/Loader";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div className={css.contactsWrapper}>
      {loading && !error && <Loader />}
      {!loading && error && (
        <p className={css.error}>Whoops, try reloading the page</p>
      )}
      <ul className={css.contactList}>
        {contacts.map((contact) => {
          return <Contact key={contact.id} item={contact} />;
        })}
      </ul>
    </div>
  );
};
