import * as Yup from "yup";

export const AuthenticationSchema = Yup.object({
  username: Yup.string().min(5).max(25).required("Please enter your user name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(10).required("Please enter your password"),
});
