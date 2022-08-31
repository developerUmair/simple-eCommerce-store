import styled from "@emotion/styled";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./Form.css";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";

const LoginComp = () => {
  const ButtonComp = styled("button")(({ theme }) => ({
    backgroundColor: "#ff3d00",
    padding: "10px 40px",
    borderRadius: 0,
    marginBottom: "20px",
    border: "none",
    color: "white",
    fontSize: "18px",
  }));
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        // display: "flex",
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
            <form>
              <TextField
                sx={{ width: "100%", mt: "40px", mb: "10px" }}
                required
                id="outlined-required"
                type="email"
                label="Email"
              />

              <TextField
                sx={{ width: "100%", mt: "10px", mb: "20px" }}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </form>
            <Stack direction="row" spacing={2}>
              <ButtonComp variant="contained">Login</ButtonComp>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </FormGroup>
            </Stack>
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
        <TabPanel value="2" sx={{ display: "flex", justifyContent: "center" }}>
          <div className="page">
            <label>Sign Up Form</label>
            <form>
              <TextField
                sx={{ width: "100%", mt: "40px" }}
                required
                id="outlined-required"
                type="email"
                label="Email"
              />

              <TextField
                sx={{ width: "100%", mt: "20px" }}
                required
                id="outlined-required"
                type="text"
                label="Username"
              />

              <TextField
                sx={{ width: "100%", mt: "20px", mb: "20px" }}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <ButtonComp variant="contained">Register</ButtonComp>
            </form>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LoginComp;
