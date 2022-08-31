import { Grid } from "@mui/material";
import React, { children } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={2}
          sx={{ fontFamily: "Monospace", height: "100vh", padding: 0 }}
        >
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{ padding: 0 }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
