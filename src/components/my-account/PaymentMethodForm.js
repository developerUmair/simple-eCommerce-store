import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { inputLabelClasses } from "@mui/material/InputLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

const ButtonComp = styled("button")(({ theme }) => ({
  backgroundColor: "#a535f0",
  padding: "10px 20px",
  borderRadius: 0,
  marginTop: "20px",
  border: "none",
  color: "white",
  fontSize: "18px",
}));

const PaymentMethodForm = () => {
  return (
    <div>
      <Accordion sx={{ width: "80%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Credit/Debit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <TextField
              sx={{
                width: "100%",
                mb: 2,
              }}
              size="small"
              id="outlined-basic"
              label="Name on card"
              variant="outlined"
              placeholder="Name on card"
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
                width: "100%",
                mb: 2,
              }}
              type="number"
              size="small"
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              placeholder="0000 0000 0000 0000"
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
                width: "54.5%",
              }}
              size="small"
              type="number"
              label="Security code"
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
                ml: 2,
              }}
              size="small"
              type="date"
              placeholder="Expiration date"
              InputLabelProps={{
                sx: {
                  [`&.${inputLabelClasses.shrink}`]: {
                    textTransform: "none",
                  },
                },
              }}
            />
            <FormGroup>
              <FormControlLabel
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "gray",
                }}
                control={<Checkbox />}
                label="Securely save this card for my later purchase."
              />
            </FormGroup>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "80%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Paypal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In order to complete your transaction, we will transfer you over to
            PayPal's secure servers.
          </Typography>
          <ButtonComp variant="outlined">Proceed</ButtonComp>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentMethodForm;
