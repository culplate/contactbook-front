import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 symbols long")
      .max(14, "Too Long! (max. 14 symbols)")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        console.log(values);
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="username">
            Username
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="username"
            autoComplete="username"
          />
          <ErrorMessage className={css.error} component="span" name="name" />
        </div>

        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="useremail">
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id="useremail"
            autoComplete="email"
          />
          <ErrorMessage className={css.error} component="span" name="email" />
        </div>

        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="userpassword">
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id="userpassword"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.error}
            component="span"
            name="password"
          />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
