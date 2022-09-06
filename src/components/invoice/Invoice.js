import styled from "@emotion/styled";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Invoice = () => {
  const orderData = [
    {
      order_title: "Order Date",
      description: "18 March, 2021",
    },
    {
      order_title: "Order Number",
      description: "BK98601090",
    },
    {
      order_title: "Payment",
      description: "Visa - 4699",
    },
    {
      order_title: "Address",
      description: "8502 Preston Road",
    },
  ];

  const priceData = [
    {
      price_title: "Subtotal",
      price: "199.99",
    },
    {
      price_title: "Express Shipping",
      price: "6.99",
    },
    {
      price_title: "Taxes",
      price: "13.99",
    },
    {
      price_title: "Discount (SAVE20)",
      price: "- 20% (39.99)",
    },
  ];

  const TitleGray = styled("p")(({ theme }) => ({
    color: "gray",
    margin: "10px",
  }));
  const Titleblack = styled("p")(({ theme }) => ({
    color: "#222",
    margin: "10px",
  }));
  return (
    <>
      <div style={{ background: "#F9FAFB" }}>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 250,
            display: "flex",
            margin: "auto",
          }}
          alt="logo"
          src="../assets/images/ecommerce_logo.png"
        />
      </div>
      <TitleGray gutterBottom style={{ fontSize: "40px" }}>
        Your Order Confirmed!
      </TitleGray>
      <TitleGray style={{ fontSize: "22px" }}>Hey, John Doe</TitleGray>
      <Titleblack style={{ fontSize: "25px" }}>
        Your order has been confirmed and will be shipping soon.
      </Titleblack>
      <Divider />

      <Grid container spacing={2} sx={{ padding: "10px 0px" }}>
        {orderData.map((data) => (
          <Grid item xs={3}>
            <TitleGray style={{ fontSize: "20px" }}>
              {data.order_title}
            </TitleGray>
            <Titleblack style={{ fontSize: "24px" }}>
              {data.description}
            </Titleblack>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container spacing={2} sx={{ padding: "10px 0px" }}>
        <Grid item xs={2}>
          <Box
            component="img"
            sx={{
              height: 200,
              width: 150,
            }}
            alt="The house from the offer."
            src="../assets/images/cake-flour.jpg"
          />
        </Grid>
        <Grid
          item
          xs={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <Titleblack style={{ fontSize: "30px" }}>
              Complete Bee Hive and flour for baking.
            </Titleblack>
            <TitleGray style={{ fontSize: "22px" }}>Cake Flour Sante</TitleGray>
          </div>
        </Grid>
        <Grid
          item
          xs={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TitleGray style={{ fontSize: "20px" }}>Qty 1</TitleGray>
        </Grid>
        <Grid
          item
          xs={1.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TitleGray style={{ fontSize: "20px" }}>$199.99</TitleGray>
        </Grid>
      </Grid>
      <Divider />
      {priceData.map((data) => (
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            padding: "10px 60px 10px 10px",
          }}
        >
          <Grid item>
            <Titleblack style={{ fontSize: "24px" }}>
              {data.price_title}
            </Titleblack>
          </Grid>
          <Grid item>
            <TitleGray style={{ fontSize: "20px" }}>${data.price}</TitleGray>
          </Grid>
        </Grid>
      ))}
      <Divider />
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "space-between",
          padding: "20px 60px 20px 10px",
        }}
      >
        <Grid item>
          <Titleblack style={{ fontSize: "24px" }}>Total</Titleblack>
        </Grid>
        <Grid item>
          <Titleblack style={{ fontSize: "24px" }}>$180.98</Titleblack>
        </Grid>
      </Grid>
      <Divider />
      <Titleblack style={{ fontSize: "24px" }} padding="40px 50px 40px 10px">
        We'll send you shipping confirmation when your item(s) are on the way!
        We appreciate your business, and hope enjoy your purchase.
      </Titleblack>
      <Titleblack style={{ fontSize: "24px", padding: "10px 50px 10px 10px" }}>
        Thank you!
      </Titleblack>
      <TitleGray style={{ fontSize: "25px", padding: "10px 50px 30px 10px" }}>
        Bekeeper Supplies
      </TitleGray>

      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "space-between",
          padding: "20px 60px 20px 10px",
          background: "#f9fafb",
        }}
      >
        <Grid item>
          <Typography variant="span" fontSize={25} color="#222" gutterBottom>
            Questions? Contact our{" "}
          </Typography>
          <Typography variant="span" color="#6961E8" fontSize={25}>
            Customer Support
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="#222" gutterBottom>
            © 2021 Beekeeper Supplies
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default Invoice;
