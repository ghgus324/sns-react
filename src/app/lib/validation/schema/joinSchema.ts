import * as Yup from "yup";

export const joinSchema = Yup.object().shape({
  id: Yup.string()
    .min(6, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(8, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  confirmEmail: Yup.string()
    .email("Invalid email")
    .required("Required"),
  nickname: Yup.string()
    .min(1, "Too Short!")
    .max(12, "Too Long!"),
  gender: Yup.string(),
});
