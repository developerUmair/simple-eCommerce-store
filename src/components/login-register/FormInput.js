import { Divider, TextField } from "@mui/material";
import React from "react";

const FormInput = () => {
  return (
    <div>
      <Divider />
      <form>
        <TextField
          sx={{
            width: "100%",
            mt: "40px",
            mb: "10px",
          }}
          required
          id="outlined-required"
          type="email"
          label="Username or Email address"
        />

        <TextField
          sx={{ width: "100%", mt: "10px", mb: "20px" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
    </div>
  );
};

export default FormInput;
