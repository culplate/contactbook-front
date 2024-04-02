import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/authOps";

export const RegisterForm = () => {
  const dispatch = useDispatch();

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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
