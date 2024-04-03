import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn, register } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        console.log(values);
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
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

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
