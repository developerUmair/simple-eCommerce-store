import styled from "@emotion/styled";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
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
  name: "",
  email: "",
  password: "",
};

const LoginForm = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AuthenticationSchema,
      onSubmit: (values) => {
        console.log(values);
        alert("Submit");
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          helperText=""
          sx={{ width: "100%", mt: "40px" }}
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
          helperText=""
          sx={{ width: "100%", mt: "20px" }}
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          size="small"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p style={{ color: "red", fontSize: "15px" }}>{errors.password}</p>
        ) : null}
        <Stack direction="col" spacing={2}>
          <ButtonComp
            variant="contained"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Login{" "}
          </ButtonComp>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
