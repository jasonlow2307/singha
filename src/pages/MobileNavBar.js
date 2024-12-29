import { Icon } from "@iconify/react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, MenuItem, Select } from "@mui/material";

const MobileNavBar = ({ onNavigate }) => {
  const { i18n, t } = useTranslation();

  // Handle language change
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        display: { xs: "flex", sm: "none" }, // Visible only on xs and below sm
        background: "linear-gradient(to right, #FF7A59, #FFB347)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-around" }}>
        {/* HOME Button */}
        <Button
          variant="contained"
          onClick={() => onNavigate("home")}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            textTransform: "none",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Icon icon="mdi:home" width="24" height="24" />
        </Button>
        {/* BUY NOW Button */}
        <Button
          variant="contained"
          onClick={() => onNavigate("shopping")}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            textTransform: "none",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Icon icon="mdi:shopping" width="24" height="24" />
        </Button>

        {/* CART Button */}
        <IconButton
          onClick={() => onNavigate("shoppingCart")}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Icon icon="mdi:cart" width="24" height="24" />
        </IconButton>

        {/* Language Toggle */}
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Icon
                icon={
                  selected === "en"
                    ? "twemoji:flag-for-united-states"
                    : "twemoji:flag-for-china"
                }
                style={{
                  fontSize: "20px",
                  color: "#ffffff",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              >
                {selected === "en" ? "English" : "中文"}
              </Typography>
            </Box>
          )}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "5px 10px",
            color: "#ffffff",
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            width: "120px", // Reduced width for mobile
            height: "40px", // Adjusted height for better fit
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#f8f9fa",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                "& .MuiMenuItem-root": {
                  fontSize: "14px", // Smaller font for mobile
                  fontWeight: "bold",
                  padding: "8px 16px", // Compact padding for better mobile fit
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "#ffeb99",
                },
              },
            },
          }}
        >
          <MenuItem
            value="en"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Icon
              icon="twemoji:flag-for-united-states"
              style={{
                fontSize: "20px",
              }}
            />
            <Typography>English</Typography>
          </MenuItem>
          <MenuItem
            value="cn"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Icon
              icon="twemoji:flag-for-china"
              style={{
                fontSize: "20px",
              }}
            />
            <Typography>中文</Typography>
          </MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavBar;
