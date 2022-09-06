import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <>
      <Stack
        sx={{ backgroundColor: "#eeeeee", width: "60%", padding: "10px 50px" }}
      >
        <Stack direction="row" spacing={8} alignItems={"center"} gutterBottom>
          <Typography variant="p" sx={{ fontWeight: "bold" }}>
            Sub Total
          </Typography>
          <Typography variant="h6" fontSize={18} color={"gray"}>
            $50.00
          </Typography>
        </Stack>
        <Stack direction="row" spacing={8} alignItems={"center"} gutterBottom>
          <Typography variant="p" sx={{ fontWeight: "bold" }}>
            Shipping
          </Typography>
          <Typography variant="h6" fontSize={18} color={"gray"}>
            N/A
          </Typography>
        </Stack>
        <Stack direction="row" spacing={8} alignItems={"center"} gutterBottom>
          <Typography variant="p" sx={{ fontWeight: "bold" }}>
            Sales tax
          </Typography>
          <Typography variant="h6" fontSize={18} color={"gray"}>
            N/A
          </Typography>
        </Stack>
        <Stack direction="row" spacing={8} alignItems={"center"} gutterBottom>
          <Typography variant="p" sx={{ fontWeight: "bold" }}>
            Total Cost
          </Typography>
          <Typography variant="h6" fontSize={18} color={"gray"}>
            $200
          </Typography>
        </Stack>

        <Button
          variant="outlined"
          sx={{
            marginTop: "10px",
            backgroundColor: "#a535f0",
            px: 10,
            py: 1,
            color: "white",
            fontWeight: "bold",
            borderRadius: 0,
            listSytleType: "none",
          }}
        >
          <Link
            to="/invoice"
            style={{ textDecoration: "none", color: "white" }}
          >
            Checkout
          </Link>
        </Button>
      </Stack>
    </>
  );
};

export default CartTotal;
