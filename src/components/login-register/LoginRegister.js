import styled from "@emotion/styled";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import FormInput from "./FormInput";

const ButtonComp = styled("button")(({ theme }) => ({
  backgroundColor: "#ff3d00",
  padding: "10px 40px",
  borderRadius: 0,
  marginBottom: "20px",
  border: "none",
  color: "white",
  fontSize: "18px",
}));

const LoginRegister = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{ padding: "50px" }}>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <FormInput />
          <Stack direction="row" spacing={2}>
            <ButtonComp variant="contained">Login</ButtonComp>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
          </Stack>
          <Typography
            variant="p"
            sx={{ fontFamily: "sans-serif", color: "gray" }}
          >
            Lost your password?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          <FormInput />
          <Stack direction="row" spacing={2}>
            <ButtonComp variant="contained">Register</ButtonComp>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginRegister;
