import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useShoppingCart } from "../providers/ShoppingCartProvider";

const ShoppingCartPage = () => {
  const { shoppingCart } = useShoppingCart();
  const { t } = useTranslation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  // Calculate total cost
  const calculateTotal = () =>
    shoppingCart.reduce((total, item) => {
      console.log(item);
      const price = item.quantity >= 2 ? item.price.bundle : item.price.single;
      return total + price * item.quantity;
    }, 0);

  const handleCheckout = () => {
    setSnackbar({
      open: true,
      message: t("shopping_cart_page.checkout_snackbar_message"),
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ open: false, message: "" });
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #F48E02, #FFB74D)",
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Page Header */}
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "#fff",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        {t("shopping_cart_page.title")}
      </Typography>

      {/* Shopping Cart Table */}
      {shoppingCart.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "900px",
            borderRadius: 4,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#F48E02",
                }}
              >
                <TableCell
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {t("shopping_cart_page.product_name_label")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {t("shopping_cart_page.price_label")} (RM)
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {t("shopping_cart_page.quantity_label")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {t("shopping_cart_page.subtotal_label")} (RM)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCart.map((item) => {
                const price =
                  item.quantity >= 2 ? item.bundlePrice : item.singlePrice; // Determine price
                const subtotal = price * item.quantity; // Calculate subtotal
                return (
                  <TableRow
                    key={item.id}
                    sx={{
                      "&:hover": {
                        bgcolor: "#FFF5E0",
                      },
                    }}
                  >
                    <TableCell sx={{ fontSize: "1.1rem" }}>
                      {item.name}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                      RM {price.toFixed(2)}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                      {item.quantity}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                      RM {subtotal.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          variant="body1"
          color="#fff"
          sx={{
            mt: 4,
            fontWeight: "bold",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
            fontSize: "1.5rem", // Increased font size
          }}
        >
          {t("shopping_cart_page.empty_message")}
        </Typography>
      )}

      {/* Total Section */}
      {shoppingCart.length > 0 && (
        <Box
          sx={{
            mt: 4,
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#FFF5E0",
            p: 2,
            borderRadius: 4,
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {t("shopping_cart_page.total_label")}
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#F48E02", fontSize: "1.5rem" }}
          >
            RM {calculateTotal().toFixed(2)}
          </Typography>
        </Box>
      )}

      {/* Checkout Button */}
      {shoppingCart.length > 0 && (
        <Button
          variant="contained"
          sx={{
            mt: 4,
            py: 1.5,
            px: 4,
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#fff",
            borderRadius: 3,
            background: "linear-gradient(to right, #4caf50, #81c784)",
            "&:hover": {
              background: "linear-gradient(to right, #388e3c, #66bb6a)",
            },
          }}
          onClick={handleCheckout}
        >
          {t("shopping_cart_page.checkout_button")}
        </Button>
      )}

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ShoppingCartPage;
