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
import { Icon } from "@iconify/react";

const ShoppingCartPage = ({ onNavigate }) => {
  const { shoppingCart } = useShoppingCart();
  const { t } = useTranslation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  // Calculate total cost
  const calculateTotal = () =>
    shoppingCart.reduce((total, item) => {
      const price =
        item.quantity >= 2 ? item.prices.bundle : item.prices.single; // Determine price dynamically
      return total + price * item.quantity;
    }, 0);

  const handleCheckout = () => {
    setSnackbar({
      open: true,
      message: t("shopping_cart_page.checkout_snackbar_message"),
    });
    onNavigate("payment");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ open: false, message: "" });
  };

  const navigateToShopping = () => {
    onNavigate("shopping");
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
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.9rem", md: "1.2rem" }, // Responsive font size
                  }}
                >
                  {t("shopping_cart_page.product_name_label")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.9rem", md: "1.2rem" }, // Responsive font size
                  }}
                >
                  {t("shopping_cart_page.price_label")} (RM)
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.9rem", md: "1.2rem" }, // Responsive font size
                  }}
                >
                  {t("shopping_cart_page.quantity_label")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.9rem", md: "1.2rem" }, // Responsive font size
                  }}
                >
                  {t("shopping_cart_page.subtotal_label")} (RM)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCart.map((item) => {
                const price =
                  item.quantity >= 2 ? item.prices.bundle : item.prices.single; // Determine price dynamically
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
                    {/* Product Image */}
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        border: "none",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{
                          width: { xs: "60px", md: "120px" },
                          height: { xs: "60px", md: "120px" },
                          borderRadius: "8px",
                          objectFit: "cover",
                          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                          mr: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                        }}
                      >
                        {t(item.nameKey)}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                      }}
                    >
                      RM {price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                      }}
                    >
                      {item.quantity}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                      }}
                    >
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
            fontSize: "1.5rem",
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
        onClick={navigateToShopping}
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
        <Typography>{t("shopping_cart_page.shopping_page")}</Typography>
      </Button>

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
          sx={{ width: { xs: "50%", sm: "100%" } }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ShoppingCartPage;
