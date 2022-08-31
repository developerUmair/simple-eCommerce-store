import styled from "@emotion/styled";
import { Grid, Link, Typography } from "@mui/material";
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

const RegisterForm = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{ padding: "50px" }}>
        <Grid item xs={6} sx={{ width: "768px", margin: "auto" }}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          <FormInput />
          <Stack direction="row" spacing={2}>
            <ButtonComp variant="contained">Register</ButtonComp>
          </Stack>
          <Link variant="p" sx={{ fontFamily: "sans-serif" }}>
            Already a member? Login
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterForm;
