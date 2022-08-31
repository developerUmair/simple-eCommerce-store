import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  CardMedia,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const PropertiesWrapper = styled("p")(({ theme }) => ({
  variant: "h6",
  textalign: "left",
  paddingLeft: "20px",
  fontSize: "20px",
  color: "gray",
  padding: "5px 20px",
  fontFamily: "sans-serif",
}));

const SingleProduct = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();
  console.log(id);

  console.log("item", item);

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      console.log("test", data);
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Shop
        </Link>
        <Typography color="text.primary">Cake Flour</Typography>
      </Breadcrumbs>
      <Divider />

      <Grid
        container
        rowSpacing={1}
        padding={"50px"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="500"
            image={item.image}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            textalign={"left"}
            paddingLeft={"20px"}
            gutterBottom
          >
            {item.title}
          </Typography>
          <Typography
            variant="h5"
            textalign={"left"}
            paddingLeft={"20px"}
            gutterBottom
          >
            ${item.price}
          </Typography>
          <Typography
            variant="h5"
            textalign={"left"}
            paddingLeft={"20px"}
            gutterBottom
          >
            <Stack direction="row" spacing={2}>
              <Rating name="read-only" value={4} textlign={"left"} readOnly />

              <Typography
                color={"gray"}
                marginBottom={"20px"}
                fontSize={"15px"}
                gutterBottom
              >
                (1 Customer review)
              </Typography>
            </Stack>
            <Typography
              color={"gray"}
              variant="p"
              fontSize={"15px"}
              gutterBottom
            >
              {item.description}
            </Typography>
            <br /> <br />
            <Stack direction="row" spacing={2}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>
                  <RemoveIcon />
                </Button>
                <Button sx={{ backgroundColor: "#607d8b", fontSize: "20px" }}>
                  1
                </Button>
                <Button>
                  <AddIcon />
                </Button>
              </ButtonGroup>

              <Button sx={{ ml: "10px" }} variant="contained">
                Add to cart
              </Button>
            </Stack>
          </Typography>
          <Typography>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
              />
            </IconButton>
            <Button sx={{ mr: "220px" }}>Add to wishlist</Button>
          </Typography>
          <PropertiesWrapper>SKU: 061</PropertiesWrapper>
          <PropertiesWrapper>Category: {item.category}</PropertiesWrapper>
          <PropertiesWrapper>Tag: Cooking</PropertiesWrapper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleProduct;
