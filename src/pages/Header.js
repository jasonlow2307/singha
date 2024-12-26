import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Header = ({ onNavigate }) => {
  const { i18n, t } = useTranslation();

  // Handle language change
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
            width: { xs: 70, sm: 120 },
            display: "block",
            mx: { xs: "auto", sm: "0" },
            borderRadius: 2,
            boxShadow: 4,
            my: 2,
            cursor: "pointer",
          }}
        />

        {/* Right Section: Buttons and Language Toggle */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            display: { xs: "none", sm: "flex" },
          }}
        >
          {/* Buy Now Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => onNavigate("shopping")}
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
              {t("header.buy_now")}
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
              {t("header.shopping_cart")}
            </Typography>
          </Button>

          {/* Language Toggle */}
          <Select
            value={i18n.language}
            onChange={handleLanguageChange}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "5px 20px",
              color: "#ffffff",
              background: "linear-gradient(to right, #ff8a00, #ffc107)",
              "&:hover": {
                background: "linear-gradient(to right, #e67e00, #ffb300)",
              },
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              width: "145px",
              height: "45px",
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#f8f9fa",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  "& .MuiMenuItem-root": {
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "8px 20px",
                  },
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "#ffeb99",
                  },
                },
              },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="cn">中文</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
