import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import css from "./ContactEditForm.module.css";
import { editContact } from "../../redux/contacts/operations";
import { Button, TextField } from "@mui/material";

export const ContactEditForm = ({ item, setEdit }) => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 symbols long")
      .max(30, "Too Long! (max. 30 symbols)")
      .required("Name is required"),
    number: Yup.string()
      .min(5, "Must be at least 5 sybmols long")
      .max(20, "Too Long! (max. 20 symbols)"),
    email: Yup.string()
      .email("Invalid email")
      .min(5, "Must be at least 5 sybmols long")
      .max(50, "Too Long! (max. 50 symbols)"),
  });

  const formik = useFormik({
    initialValues: {
      name: item.name,
      number: item.number || "",
      email: item.email || "",
    },
    validationSchema: FeedbackSchema,
    onSubmit: (values) => {
      dispatch(editContact({ id: item._id, ...values }));
      setEdit(false);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ marginBottom: "20px" }}
          fullWidth
          id="contactname"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          fullWidth
          id="contactnumber"
          name="number"
          label="Number"
          autoComplete="tel"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          fullWidth
          id="contactemail"
          name="email"
          label="Email"
          autoComplete="tel"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button color="success" type="submit">
          Submit
        </Button>
        <Button type="button" onClick={() => setEdit(false)}>
          Cancel
        </Button>
      </form>
    </div>
  );
};
