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
import { Image } from "@mui/icons-material";

const PaymentPage = ({ onNavigate }) => {
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

  const handleConfirmOrder = () => {
    setSnackbar({
      open: true,
      message: t("payment_page.order_confirmed_snackbar"),
    });
    onNavigate("home");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ open: false, message: "" });
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #e3f2fd, #bbdefb)",
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
          color: "#0288d1",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        {t("payment_page.title")}
      </Typography>

      {/* QR Code */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: "#0288d1", mb: 2 }}
        >
          {t("payment_page.scan_qr")}
        </Typography>
        <img src="/singha/about_us.png" width={400} borderRadius={25} />
      </Box>

      {/* Total Amount and Breakdown */}
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "900px",
          borderRadius: 4,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          mb: 4,
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#0288d1",
              }}
            >
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1.2rem" },
                }}
              >
                {t("payment_page.product_name_label")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1.2rem" },
                }}
              >
                {t("payment_page.quantity_label")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1.2rem" }, // Responsive font size
                }}
              >
                {t("payment_page.subtotal_label")} (RM)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCart.map((item) => {
              const price =
                item.quantity >= 2 ? item.prices.bundle : item.prices.single;
              const subtotal = price * item.quantity;
              return (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:hover": {
                      bgcolor: "#e3f2fd",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: { xs: "0.8rem", md: "1.1rem" },
                    }}
                  >
                    {t(item.nameKey)}
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
            <TableRow>
              <TableCell
                colSpan={2}
                align="right"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                {t("payment_page.total_label")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.5rem" },
                  color: "#F48E02",
                }}
              >
                RM {calculateTotal().toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirm Payment Button */}
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
        onClick={handleConfirmOrder}
      >
        {t("payment_page.confirm_payment_button")}
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

export default PaymentPage;
