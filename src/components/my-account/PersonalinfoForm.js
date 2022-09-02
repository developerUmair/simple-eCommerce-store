import { TextField } from "@mui/material";
import React from "react";
import { inputLabelClasses } from "@mui/material/InputLabel";

const PersonalinfoForm = () => {
  return (
    <div>
      <form>
        <TextField
          sx={{
            width: "80%",
            mb: "10px",
          }}
          size="small"
          required
          label="First Name"
          type="text"
          InputLabelProps={{
            sx: {
              [`&.${inputLabelClasses.shrink}`]: {
                textTransform: "none",
              },
            },
          }}
        />
        <TextField
          sx={{
            width: "80%",
            mb: "10px",
          }}
          size="small"
          type="text"
          required
          label="Last Name"
          InputLabelProps={{
            sx: {
              [`&.${inputLabelClasses.shrink}`]: {
                textTransform: "none",
              },
            },
          }}
        />
        <TextField
          sx={{
            width: "80%",
            mb: "10px",
          }}
          size="small"
          type="email"
          required
          label="Email Address"
          InputLabelProps={{
            sx: {
              [`&.${inputLabelClasses.shrink}`]: {
                textTransform: "none",
              },
            },
          }}
        />
        <TextField
          sx={{
            width: "80%",
            mb: "10px",
          }}
          size="small"
          type="number"
          label="Phone Number"
          InputLabelProps={{
            sx: {
              [`&.${inputLabelClasses.shrink}`]: {
                textTransform: "none",
              },
            },
          }}
        />
      </form>
    </div>
  );
};

export default PersonalinfoForm;
