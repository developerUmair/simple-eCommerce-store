import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { AuthenticationSchema } from "./AuthenticationSchema";

const ButtonComp = styled("button")(({ theme }) => ({
  backgroundColor: "#a535f0",
  padding: "10px 40px",
  borderRadius: 0,
  marginBottom: "20px",
  border: "none",
  color: "white",
  fontSize: "18px",
}));

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};
const SignupForm = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AuthenticationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "100%", mt: "40px" }}
          id="outlined-required"
          type="email"
          name="email"
          label="Email"
          size="small"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>
        ) : null}

        <TextField
          sx={{ width: "100%", mt: "20px" }}
          id="outlined-required"
          type="text"
          name="username"
          label="Username"
          size="small"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username ? (
          <p style={{ color: "red", fontSize: "15px" }}>{errors.username}</p>
        ) : null}

        <TextField
          sx={{ width: "100%", mt: "20px" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          size="small"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p style={{ color: "red", fontSize: "15px" }}>{errors.password}</p>
        ) : null}
        <ButtonComp
          variant="contained"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Register
        </ButtonComp>
      </form>
    </div>
  );
};

export default SignupForm;
