import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CartHeader from "./CartHeader";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/system";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ButtonComp = styled("button")(({ theme }) => ({
  backgroundColor: "#a535f0",
  padding: "5px 20px",
  borderRadius: 0,
  marginBottom: "20px",
  border: "none",
  color: "white",
  fontSize: "18px",
}));

const Cart = () => {
  const cartData = [
    {
      id: 1,
      product_image: "../assets/images/product-1.jpg",
      product_title: "Head Phones",
      product_price: "50.00",
      total_price: "75.00",
    },
    {
      id: 2,
      product_image: "../assets/images/product-2.jpg",
      product_title: "Loud Speakers",
      product_price: "200.00",
      total_price: "75.00",
    },
  ];
  return (
    <div>
      <CartHeader />
      <Grid container spacing={2}>
        <Grid xs={6} margin={2}>
          {cartData.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              margin={2}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CloseIcon fontSize="10" />
              <Box
                component="img"
                sx={{
                  height: 60,
                  width: 60,
                }}
                alt={item.product_title}
                src={item.product_image}
              />
              <Typography variant="h6">{item.product_title}</Typography>
              <Typography variant="h6" fontSize={18}>
                ${item.product_price}
              </Typography>
              <ButtonGroup
                size="small"
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button sx={{ backgroundColor: "#a535f0", borderRadius: 0 }}>
                  <RemoveIcon />
                </Button>
                <Button sx={{ backgroundColor: "#607d8b", fontSize: "15px" }}>
                  3
                </Button>
                <Button sx={{ backgroundColor: "#a535f0", borderRadius: 0 }}>
                  <AddIcon />
                </Button>
              </ButtonGroup>
              <Typography variant="h6" fontSize={18}>
                ${item.total_price}
              </Typography>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            margin={2}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          ></Grid>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Stack direction="row" spacing={2} justifyContent={"center"}>
              <CardGiftcardIcon />
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="Coupon Code"
              />
            </Stack>

            <ButtonComp variant="outlined" size="small" fontWeight={"bold"}>
              Apply Coupon
            </ButtonComp>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent={"space-between"}
            marginTop={4}
            marginLeft={4}
          >
            <ButtonComp variant="outlined" size="small">
              Update Cart
            </ButtonComp>
          </Stack>
        </Grid>

        <Grid item xs={5} margin={2}>
          <Grid item xs={12} margin={2}>
            <Typography variant="h5" fontWeight={"bold"} gutterBottom>
              Cart Totals
            </Typography>
          </Grid>
          <Grid item xs={12} margin={2} backgroundColor={"#eeeeee"} padding={2}>
            <Stack
              direction="row"
              spacing={8}
              alignItems={"center"}
              gutterBottom
            >
              <Typography variant="h6">Sub Total</Typography>
              <Typography variant="h6" fontSize={18} color={"gray"}>
                $50.00
              </Typography>
            </Stack>
            <Stack direction="row" spacing={8} marginTop={2}>
              <Typography variant="h6">Shipping</Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{ color: "gray" }}
                    value="Flat rate"
                    control={<Radio size="small" />}
                    label="Flat rate"
                  />
                  <FormControlLabel
                    sx={{ color: "gray" }}
                    value="Free Shipping"
                    control={<Radio size="small" />}
                    label="Free Shipping"
                  />
                  <FormControlLabel
                    sx={{ color: "gray" }}
                    value="Local Pickup"
                    control={<Radio size="small" />}
                    label="Local Pickup"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>

            <Stack
              marginTop={2}
              direction="row"
              spacing={8}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" fontSize={"18px"} fontWeight={"bold"}>
                $75.00
              </Typography>
            </Stack>
            <Stack direction="row" marginTop={3} justifyContent={"center"}>
              <Link to="/my-account" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#a535f0",
                    px: 10,
                    py: 1,
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 0,
                    listSytleType: "none",
                  }}
                >
                  Procced to checkout
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
