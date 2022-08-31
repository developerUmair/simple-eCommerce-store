import React, { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Search = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ width: "768px", m: "auto" }}>
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>

        <Typography color="text.primary" sx={{ fontWeight: 550 }}>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Shop
          </Link>
        </Typography>
      </Breadcrumbs>
      <Box sx={{ flexGrow: 1, mb: 2, backgroundColor: "#eeeeee" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchOutlinedIcon />
          </IconButton>
          <TextField
            placeholder="Search by order #, name or email...."
            type="search"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          />
          <Button color="inherit"></Button>

          <FormControl variant="standard" sx={{ minWidth: 80, pb: 5 }}>
            <InputLabel
              id="demo-simple-select-standard-label"
              sx={{ textTransform: "capitalize" }}
            >
              Filters
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Filters"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button color="inherit">
            <MoreHorizRoundedIcon />
          </Button>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Search;
