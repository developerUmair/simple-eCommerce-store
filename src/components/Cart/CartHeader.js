import { Breadcrumbs, Divider, Link, Typography } from "@mui/material";
import React from "react";


const CartHeader = () => {
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
        Cart
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>

        <Typography color="text.primary">Cart</Typography>
      </Breadcrumbs>
      <Divider />
      
    </div>
  );
};

export default CartHeader;
