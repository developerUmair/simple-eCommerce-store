import { Divider, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
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
      <Typography variant="h3" color="gray" m="10px" gutterBottom>
        Your Order Confirmed!
      </Typography>
      <Typography variant="h5" color="gray" m="10px">
        Hey, John Doe
      </Typography>
      <Typography variant="h6" color="#222" m="10px">
        Your order has been confirmed and will be shipping soon.
      </Typography>
      <Divider />

      <Grid container spacing={2} sx={{ padding: "10px 0px" }}>
        {orderData.map((data) => (
          <Grid item xs={3}>
            <Typography variant="h6" color="gray" m="10px">
              {data.order_title}
            </Typography>
            <Typography variant="h6" color="#222" m="10px">
              {data.description}
            </Typography>
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
            <Typography
              variant="h5"
              color="#222"
              fontSize="30px"
              m="10px"
              gutterBottom
            >
              Complete Bee Hive and flour for baking.
            </Typography>
            <Typography variant="h6" color="gray" m="10px" gutterBottom>
              Cake Flour Sante
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" color="gray" m="10px" gutterBottom>
            Qty 1
          </Typography>
        </Grid>
        <Grid
          item
          xs={1.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" color="gray" m="10px" gutterBottom>
            $199.99
          </Typography>
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
            <Typography variant="h5" color="#222" gutterBottom>
              {data.price_title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="gray" gutterBottom>
              ${data.price}
            </Typography>
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
          <Typography variant="h5" color="#222" gutterBottom>
            Total
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="#222" gutterBottom>
            $180.98
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="h5" color="#222" padding="40px 50px 40px 10px">
        We'll send you shipping confirmation when your item(s) are on the way!
        We appreciate your business, and hope enjoy your purchase.
      </Typography>
      <Typography variant="h5" color="#222" padding="10px 50px 10px 10px">
        Thank you!
      </Typography>
      <Typography variant="h5" color="gray" padding="10px 50px 20px 10px">
        Bekeeper Supplies
      </Typography>

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
