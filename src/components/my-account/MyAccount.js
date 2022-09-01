import styled from "@emotion/styled";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { inputLabelClasses } from "@mui/material/InputLabel";

const TitleComp = styled("p")(({ theme }) => ({
  fontSize: "20px",
  padding: "5px 20px",
  fontWeight: "bold",
  marginBottom: "20px",
}));

const MyAccount = () => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          backgroundColor: "#eeeeee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 5,
          color: "gray",
          pb: 5,
        }}
      >
        My Account
      </Typography>
      <Grid container spacing={2} sx={{ margin: "20px" }}>
        <Grid item xs={6} sx={{ textTransform: "none" }}>
          <TitleComp>Personal Information</TitleComp>
          <form>
            {" "}
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
                    textTransform: "none",
                  },
                },
              }}
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          <TitleComp>Delivery Address</TitleComp>
          <form>
            <TextField
              sx={{
                width: "80%",
                mb: "10px",
              }}
              size="small"
              required
              label="Address"
              type="text"
              InputLabelProps={{
                sx: {
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
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
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
                    textTransform: "none",
                  },
                },
              }}
            />
            <TextField
              sx={{
                mb: "10px",
                ml: "5px",
              }}
              size="small"
              type="number"
              label="Zip/Postal Code"
              InputLabelProps={{
                sx: {
                  color: "orange",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "red",
                    textTransform: "none",
                  },
                },
              }}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyAccount;
