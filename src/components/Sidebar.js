import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <List
        sx={{
          height: "100vh",
          bgcolor: "#f1f1f4",
          pl: "30px",
          width: "13.5%",
          position: "fixed",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemText primary="People" />
          </ListItemButton>
        </Link>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Store" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemText primary="Products" />
              </ListItemButton>
            </Link>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="orders" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="Discounts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="Licenses" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="Affiliates" />
            </ListItemButton>
          </List>
        </Collapse>
        {/*

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Comms" />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={false} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="Products" />
            </ListItemButton>
          </List>
        </Collapse>
 
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Reports" />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={false} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="Products" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Design" />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={false} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary="Products" />
            </ListItemButton>
          </List>
        </Collapse> */}
      </List>
    </div>
  );
};

export default Sidebar;
