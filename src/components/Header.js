import {
  Avatar,
  Badge,
  Fab,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mb: 2, background: "#eeeeee" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            FlitKart
          </Typography>
          <IconButton color="inherit">
            <SearchRoundedIcon />
          </IconButton>

          <IconButton color="inherit">
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <AddShoppingCartIcon color="action" />
              </Badge>
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link to="/my-account">
              <Avatar
                sx={{ width: 30, height: 30, cursor: "pointer" }}
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              />
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 40, height: 30, cursor: "pointer" }}
            >
              <AddOutlinedIcon />
            </Fab>
          </IconButton>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Header;
