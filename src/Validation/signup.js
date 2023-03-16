import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    // country: Yup.string().required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    // checkbox: Yup.boolean().oneOf([true], "Must accept terms and conditions")
  });