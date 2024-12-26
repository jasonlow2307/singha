import React from "react";
import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const MobileNavBar = ({ onNavigate }) => {
  const { t } = useTranslation();
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
          <Typography ml={1} fontSize="1rem" fontWeight={600}>
            {t("hero_section.buy_button")}
          </Typography>
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
          <Typography ml={1} fontSize="1rem" fontWeight={600}>
            {t("header.shopping_cart")}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavBar;
