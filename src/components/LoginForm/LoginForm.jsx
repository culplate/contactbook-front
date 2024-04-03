import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn, register } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

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
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
