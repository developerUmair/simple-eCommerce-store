import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./Form.css";
import { Link } from "@mui/material";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginComp = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        justifyContent: "center",
        minHeight: "550px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Login" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{ display: "flex", justifyContent: "center", mt: "40px" }}
        >
          <div className="page">
            <label>Login Form</label>
            <LoginForm />
            <Link
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                color: "blue",
                textDecoration: "none",
              }}
            >
              Lost your password?
            </Link>
          </div>
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ display: "flex", justifyContent: "center", mt: "-50px" }}
        >
          <div className="page">
            <label>Sign Up Form</label>
            <SignupForm />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LoginComp;
