import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactEditForm.module.css";
import { editContact } from "../../redux/contacts/operations";
import { TextField } from "@mui/material";

export const ContactEditForm = ({ item, setEdit }) => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 symbols long")
      .max(20, "Too Long! (max. 50 symbols)")
      .required("Required field"),
    number: Yup.string()
      .min(5, "Must be at least 5 sybmols long")
      .max(12, "Too Long! (max. 12 symbols)")
      .required("Required field"),
  });

  return (
    <Formik
      initialValues={{
        name: item.name,
        number: item.number,
      }}
      onSubmit={(values, actions) => {
        dispatch(editContact({ id: item.id, ...values }));
        setEdit(false);
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="contactname"
            autoComplete="name"
          />
          <ErrorMessage className={css.error} component="span" name="name" />
        </div>

        <div className={css.inputWrap}>
          <Field
            className={css.input}
            type="text"
            name="number"
            id="contactnumber"
            autoComplete="tel"
          />
          <ErrorMessage className={css.error} component="span" name="number" />
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => setEdit(false)}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
};
