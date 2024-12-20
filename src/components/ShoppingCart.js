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
import { useShoppingCart } from "../providers/ShoppingCartProvider";

const ShoppingCartPage = () => {
  const { shoppingCart } = useShoppingCart();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const calculateTotal = () =>
    shoppingCart.reduce((total, item) => total + item.subtotal, 0);

  const handleCheckout = () => {
    setSnackbar({
      open: true,
      message: "正在结账...",
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
        购物车
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
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  产品名称
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  单价 (¥)
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  数量
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  小计 (¥)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCart.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:hover": {
                      bgcolor: "#FFF5E0",
                    },
                  }}
                >
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center">{item.price.toFixed(2)}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="center">
                    {item.subtotal.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
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
          }}
        >
          购物车为空
        </Typography>
      )}

      {/* Total Section */}
      {shoppingCart.length > 0 && (
        <Box
          sx={{
            mt: 4,
            width: "100%",
            maxWidth: "900px",
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
            总计:
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#F48E02", fontSize: "1.5rem" }}
          >
            ¥{calculateTotal().toFixed(2)}
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
          去结账
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
