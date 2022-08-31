import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "@emotion/styled";

const FooterWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#607d8b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LinkWrapper = styled("p")(({ theme }) => ({
  margin: "10px",
  color: "white",
}));

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkWrapper href="https://www.facebook.com">
          <FacebookIcon />
        </LinkWrapper>
        <LinkWrapper href="https://www.pinterest.com">
          <PinterestIcon />
        </LinkWrapper>
        <LinkWrapper href="https://www.pinterest.com">
          <InstagramIcon />
        </LinkWrapper>
        <LinkWrapper href="https://www.pinterest.com">
          <TwitterIcon />
        </LinkWrapper>
      </FooterWrapper>

      <FooterWrapper>
        <LinkWrapper href="#" underline="none">
          Home
        </LinkWrapper>
        <LinkWrapper href="#" underline="none">
          People
        </LinkWrapper>
        <LinkWrapper href="#" underline="none">
          Store
        </LinkWrapper>
        <LinkWrapper href="#" underline="none">
          Products
        </LinkWrapper>
      </FooterWrapper>

      <FooterWrapper>
        <LinkWrapper href="#" underline="none">
          Contact
        </LinkWrapper>
        <LinkWrapper href="#" underline="none">
          Blog
        </LinkWrapper>
        <LinkWrapper href="#" underline="none">
          About us
        </LinkWrapper>
        <LinkWrapper href="#" underline="none">
          Read More
        </LinkWrapper>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
