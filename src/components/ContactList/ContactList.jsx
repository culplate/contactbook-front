import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { Loader } from "../Loader/Loader";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  // return (
  //   <div className={css.contactsWrapper}>
  //     {loading && !error && <Loader />}
  //     {!loading && error && (
  //       <p className={css.error}>Whoops, try reloading the page</p>
  //     )}
  //     <ul className={css.contactList}>
  //       {contacts.map((contact) => {
  //         return <Contact key={contact.id} data={contact} />;
  //       })}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      {/* {loading && !error && <Loader />} */}
      {!loading && error && (
        <p className={css.error}>Whoops, try reloading the page</p>
      )}
      <Grid container spacing={2}>
        {contacts.map((contact) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>
              <Contact data={contact} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
