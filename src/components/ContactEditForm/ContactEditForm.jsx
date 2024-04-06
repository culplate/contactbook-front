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
      .max(20, "Too Long! (max. 50 symbols)")
      .required("Required field"),
    number: Yup.string()
      .min(5, "Must be at least 5 sybmols long")
      .max(12, "Too Long! (max. 12 symbols)")
      .required("Required field"),
  });

  const formik = useFormik({
    initialValues: {
      name: item.name,
      number: item.number,
    },
    validationSchema: FeedbackSchema,
    onSubmit: (values) => {
      dispatch(editContact({ id: item.id, ...values }));
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
