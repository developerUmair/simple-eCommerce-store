import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";

const ButtonComp = styled("button")(({ theme }) => ({
  backgroundColor: "#a535f0",
  padding: "10px 40px",
  borderRadius: 0,
  marginBottom: "20px",
  border: "none",
  color: "white",
  fontSize: "18px",
}));

const SignupForm = () => {
  return (
    <div>
      <form>
        <TextField
          sx={{ width: "100%", mt: "40px" }}
          required
          id="outlined-required"
          type="email"
          label="Email"
        />

        <TextField
          sx={{ width: "100%", mt: "20px" }}
          required
          id="outlined-required"
          type="text"
          label="Username"
        />

        <TextField
          sx={{ width: "100%", mt: "20px", mb: "20px" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <ButtonComp variant="contained">Register</ButtonComp>
      </form>
    </div>
  );
};

export default SignupForm;
