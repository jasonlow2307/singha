import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Icon } from "@iconify/react";

const Header = ({ onNavigate }) => {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: "linear-gradient(to right, #ffffff, #f8f9fa)",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        padding: "0 20px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo Section */}
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/logo.png`}
          onClick={() => onNavigate("home")}
          alt="Logo"
          sx={{
            width: 120,
            borderRadius: 2,
            boxShadow: 4,
            my: 2,
            cursor: "pointer",
          }}
        />

        {/* Right Section: Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Buy Now Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => onNavigate("shopping")} // Navigate to ShoppingPage
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "8px 20px",
              background: "linear-gradient(to right, #ff8a00, #ffc107)",
              "&:hover": {
                background: "linear-gradient(to right, #e67e00, #ffb300)",
              },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              <Icon
                icon="hugeicons:prawn"
                width="28"
                height="28"
                color="#ffffff"
              />
            </Box>
            <Typography sx={{ fontWeight: "bold", color: "#ffffff" }}>
              立即购买
            </Typography>
          </Button>

          {/* Shopping Cart Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => onNavigate("shoppingCart")}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "8px 20px",
              background: "linear-gradient(to right, #ff8a00, #ffc107)",
              "&:hover": {
                background: "linear-gradient(to right, #e67e00, #ffb300)",
              },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              <Icon
                icon="material-symbols:shopping-cart"
                width="28"
                height="28"
                color="#ffffff"
              />
            </Box>
            <Typography sx={{ fontWeight: "bold", color: "#ffffff" }}>
              购物车
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
