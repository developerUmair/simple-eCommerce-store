import { TextField } from "@mui/material";
import React from "react";
import { inputLabelClasses } from "@mui/material/InputLabel";

const DeliveryAddressForm = () => {
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
          label="Address"
          type="textarea"
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
          label="Address 2 (Optional)"
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
          type="texxt"
          required
          label="City"
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
            mb: "10px",
          }}
          size="small"
          type="text"
          label="State"
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
            mb: "10px",
            ml: "5px",
            width: "38%",
          }}
          size="small"
          type="number"
          label="Zip/Postal Code"
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

export default DeliveryAddressForm;
