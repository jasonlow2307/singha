import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CloseIcon from "@mui/icons-material/Close";
import ProductCard from "../components/ProductCard";
import { useShoppingCart } from "../providers/ShoppingCartProvider";
import { useTranslation } from "react-i18next";

const ShoppingPage = () => {
  const { addToCart } = useShoppingCart();
  const { t } = useTranslation();

  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const products = [
    {
      id: 1,
      name: t("products_section.products.0.name"),
      prices: { single: 33, bundle: 31 },
      image: "/products/black_tiger_prawn.jpg",
      description: t("products_section.products.0.detailed_description"),
    },
    {
      id: 2,
      name: t("products_section.products.1.name"),
      prices: { single: 16, bundle: 14 },
      image: "/products/sotong_ring.jpg",
      description: t("products_section.products.1.detailed_description"),
    },
    {
      id: 3,
      name: t("products_section.products.2.name"),
      prices: { single: 30, bundle: 28 },
      image: "/products/white_prawn_3640.jpg",
      description: t("products_section.products.2.detailed_description.small"),
    },
    {
      id: 4,
      name: t("products_section.products.2.name"),
      prices: { single: 29, bundle: 27 },
      image: "/products/white_prawn_4150.jpg",
      description: t("products_section.products.2.detailed_description.big"),
    },
  ];

  const handleAddToCart = (product, quantity) => {
    addToCart(
      { ...product, prices: product.prices },
      quantity // Pass prices to the shopping cart
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
          mb: 4,
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

      <Grid container spacing={4} sx={{ maxWidth: "900px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>

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
