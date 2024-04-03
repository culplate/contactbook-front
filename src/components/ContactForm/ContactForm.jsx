import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 symbols long")
      .max(50, "Too Long! (max. 50 symbols)")
      .required("Required field"),
    number: Yup.string()
      .min(5, "Must be at least 5 sybmols long")
      .max(12, "Too Long! (max. 12 symbols)")
      .required("Required field"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values }));
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="contactname">
            Name
          </label>
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
          <label className={css.label} htmlFor="contactnumber">
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id="contactnumber"
            autoComplete="tel"
          />
          <ErrorMessage className={css.error} component="span" name="number" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
