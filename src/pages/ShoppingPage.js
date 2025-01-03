import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CloseIcon from "@mui/icons-material/Close";
import ProductCard from "../components/ProductCard";
import { useShoppingCart } from "../providers/ShoppingCartProvider";
import { useTranslation } from "react-i18next";

const ShoppingPage = ({ onNavigate }) => {
  const { addToCart } = useShoppingCart();
  const { t } = useTranslation();

  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const products = [
    {
      id: 1,
      name: t("products_section.products.0.name"),
      prices: { single: 33, bundle: 31 },
      image: "/singha/products/black_tiger_prawn.jpg",
      description: t("products_section.products.0.detailed_description"),
    },
    {
      id: 2,
      name: t("products_section.products.1.name"),
      prices: { single: 16, bundle: 14 },
      image: "/singha/products/sotong_ring.jpg",
      description: t("products_section.products.1.detailed_description"),
    },
    {
      id: 3,
      name: t("products_section.products.2.name"),
      prices: { single: 30, bundle: 28 },
      image: "/singha/products/white_prawn_3640.jpg",
      description: t("products_section.products.2.detailed_description.small"),
    },
    {
      id: 4,
      name: t("products_section.products.2.name"),
      prices: { single: 29, bundle: 27 },
      image: "/singha/products/white_prawn_4150.jpg",
      description: t("products_section.products.2.detailed_description.big"),
    },
  ];

  const handleAddToCart = (product, quantity) => {
    addToCart(
      {
        ...product,
        nameKey: `products_section.products.${product.id - 1}.name`, // Store the translation key
      },
      quantity
    );

    // Display snackbar
    setSnackbar({
      open: true,
      message: t("shopping_page.added_to_cart_message", {
        productName: product.name,
        quantity,
      }),
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const navigateToShoppingCart = () => {
    onNavigate("shoppingCart");
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        px: 4,
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #F48E02, #FFB74D)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Icon
          icon="fluent:food-fish-24-filled"
          style={{ color: "white", fontSize: "37px" }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          {t("shopping_page.title")}
        </Typography>
      </Box>

      {/* Add the note about bundle pricing */}
      <Typography
        variant="body2"
        sx={{
          color: "white",
          fontWeight: "medium",
          mb: 4,
          textAlign: "center",
        }}
      >
        {t("shopping_page.bundle_price_note")}
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: "900px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#FF6F00",
          color: "#fff",
          textTransform: "none",
          borderRadius: 25, // Slightly more rounded for a softer look
          px: 4,
          mt: 5,
          fontSize: "1.1rem", // Increase font size
          fontWeight: "bold", // Make the text bold
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
          transition: "transform 0.2s ease, box-shadow 0.2s ease", // Add smooth animation
          "&:hover": {
            bgcolor: "#d97801",
            transform: "scale(1.05)", // Slight scaling on hover for emphasis
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Increase shadow on hover
          },
          maxWidth: "250px", // Slightly larger max width
          height: "60px", // Increase button height
        }}
        onClick={navigateToShoppingCart}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
          }}
        >
          <Icon
            icon="material-symbols:shopping-cart"
            width="30"
            height="30"
            color="#ffffff"
          />
        </Box>
        <Typography>{t("header.shopping_cart")}</Typography>
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ShoppingPage;
