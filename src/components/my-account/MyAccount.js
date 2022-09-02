import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { inputLabelClasses } from "@mui/material/InputLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonalinfoForm from "./PersonalinfoForm";
import DeliveryAddressForm from "./DeliveryAddressForm";
import PaymentMethodForm from "./PaymentMethodForm";
import { Stack } from "@mui/system";
import CartTotal from "./CartTotal";

const TitleComp = styled("p")(({ theme }) => ({
  color: "#a535f0",
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
      <Grid container spacing={2} padding={2}>
        <Grid item xs={6} sx={{ textTransform: "none" }}>
          <TitleComp>Personal Information</TitleComp>
          <PersonalinfoForm />
        </Grid>
        <Grid item xs={6}>
          <TitleComp>Delivery Address</TitleComp>
          <DeliveryAddressForm />
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={6} sx={{ textTransform: "none" }}>
          <TitleComp>Payment Method</TitleComp>
          <PaymentMethodForm />
        </Grid>
        <Grid item xs={6}>
          <TitleComp>Cart Totals</TitleComp>
          <CartTotal />
        </Grid>
      </Grid>
    </div>
  );
};

export default MyAccount;
