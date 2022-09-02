import styled from "@emotion/styled";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
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

const LoginForm = () => {
  return (
    <div>
      <form>
        <TextField
          sx={{ width: "100%", mt: "40px", mb: "10px" }}
          required
          id="outlined-required"
          type="email"
          label="Email"
        />

        <TextField
          sx={{ width: "100%", mt: "10px", mb: "20px" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
      <Stack direction="row" spacing={2}>
        <ButtonComp variant="contained">Login </ButtonComp>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </FormGroup>
      </Stack>
    </div>
  );
};

export default LoginForm;
