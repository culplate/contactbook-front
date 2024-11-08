import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import Grid from "@mui/material/Grid";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      {/* {loading && !error && <Loader />} */}
      {!loading && error && (
        <p className={css.error}>Whoops, try reloading the page</p>
      )}
      <Grid container spacing={2}>
        {contacts.map((contact) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={contact._id}>
              <Contact data={contact} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
