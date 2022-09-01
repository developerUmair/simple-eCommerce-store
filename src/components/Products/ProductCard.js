import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  TablePagination,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PreviewIcon from "@mui/icons-material/Preview";
import Search from "../Search";
import { Link } from "react-router-dom";

const CardWrapper = styled("div")(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
}));

const BoxWrap = styled("div")(({ theme }) => ({
  padding: "50px",
  display: "flex",
  flexWrap: "wrap",
  gap: 30,
}));

const ProductTitle = styled("div")(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  fontSize: "16px",
  marginBottom: "10px",
}));

const PriceTag = styled("p")(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "18px",
  color: "#2979ff",
}));

const ProductCard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  /*  const product = [
    {
      id: 1,
      image_url:
        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
      product_title: "Powerful Bluetooth Speaker",
      product_price: 45.0,
    },
    {
      id: 2,
      image_url: " ../assets/images/product-1.jpg",
      product_title: "Powerful Wireless headphone",
      product_price: 90.0,
    },

    {
      id: 4,
      image_url: " ../assets/images/product-3.png",
      product_title: "Professional Glasses",
      product_price: 50.0,
    },

    {
      id: 5,
      image_url: " ../assets/images/product-5.png",
      product_title: "Mac book Pro",
      product_price: 1000.0,
    },

    {
      id: 7,
      image_url: " ../assets/images/product-7.jpg",
      product_title: "Mini table (Work n Dine)",
      product_price: 200.0,
    },

    {
      id: 9,
      image_url: " ../assets/images/product-9.jpg",
      product_title: "iPhone 13",
      product_price: 2000.0,
    },
    {
      id: 10,
      image_url: " ../assets/images/product-10.jpg",
      product_title: "Stylish Walk",
      product_price: 500.0,
    },

    {
      id: 6,
      image_url: " ../assets/images/product-6.jpg",
      product_title: "Mechanical Keyboard",
      product_price: 100.0,
    },
    {
      id: 8,
      image_url: " ../assets/images/product-8.jpg",
      product_title: "Ceiling fan",
      product_price: 300.0,
    },
    {
      id: 3,
      image_url: " ../assets/images/product-2.jpg",
      product_title: "Bass boosted speakers",
      product_price: 200.0,
    },
  ];
 */

  const [item, setItem] = useState([]);

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const data = await response.json();
    setItem(data);
  };
  // fakeStore();
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          backgroundColor: "#eeeeee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 5,
          color: "gray",
          pb: 5,
        }}
      >
        Shop
      </Typography>
      <Search />
      <BoxWrap>
        {item
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((product) => (
            <CardWrapper>
              <Card sx={{ maxWidth: 345, width: 280 }} key={item.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    width="100"
                    src={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <ProductTitle>{product.title}</ProductTitle>
                    <PriceTag>${product.price}</PriceTag>
                  </CardContent>
                </CardActionArea>
                <Divider light />
                <CardActions>
                  <Tooltip title="View">
                    <Link to={`/single-page/${product.id}`}>
                      <IconButton size="small" color="primary">
                        <PreviewIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton size="small" color="primary">
                      {/* <EditRoundedIcon /> */}
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </CardWrapper>
          ))}
      </BoxWrap>

      <TablePagination
        sx={{ backgroundColor: "#eeeeee" }}
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={item.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ProductCard;
