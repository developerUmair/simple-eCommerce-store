import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div style={{ background: "#F9FAFB" }}>
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            display: "flex",
            margin: "auto",
          }}
          alt="logo"
          src="../assets/images/notFound.png"
        />
      </div>
      <Box
        sx={{
          margin: "auto",
          background: "#F9FAFB",
          padding: "20px",
        }}
      >
        <Typography
          variant="h1"
          fontSize={"150px"}
          letterSpacing="5px"
          textAlign="center"
        >
          404
        </Typography>
        <Typography
          variant="h1"
          fontSize={"30px"}
          textAlign="center"
          gutterBottom
        >
          Soory we cannot found the page you are looking for
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "auto",
          padding: "20px",
        }}
      >
        <Typography variant="h1" fontSize={"30px"} textAlign="center">
          Let's get you back to{" "}
          <Link to="/products" style={{ textDecoration: "none" }}>
            products
          </Link>{" "}
          page
        </Typography>
      </Box>
    </div>
  );
};

export default NotFound;
