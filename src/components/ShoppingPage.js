import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CloseIcon from "@mui/icons-material/Close";
import ProductCard from "./ProductCard";

const ShoppingPage = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const [shoppingCart, setShoppingCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "老虎虾",
      price: 120.0,
      image: "/products/black_tiger_prawn.jpg",
      description: "肉质饱满，适合烧烤或清蒸 (31-35只每磅)",
    },
    {
      id: 2,
      name: "明虾",
      price: 80.0,
      image: "/products/white_prawn_3640.jpg",
      description: "鲜甜可口，适合煮汤或油炸 (36-40只每磅)",
    },
    {
      id: 3,
      name: "明虾",
      price: 200.0,
      image: "/products/white_prawn_4150.jpg",
      description: "适合做虾仁，味道鲜美 (41-50只每磅)",
    },
    {
      id: 4,
      name: "鱿鱼圈",
      price: 150.0,
      image: "/products/sotong_ring.jpg",
      description: "口感嫩滑，适合煎炸或炒制",
    },
  ];

  const handleAddToCart = (product, quantity) => {
    const existingProductIndex = shoppingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCart = [...shoppingCart];
      updatedCart[existingProductIndex].quantity += quantity;
      updatedCart[existingProductIndex].subtotal =
        updatedCart[existingProductIndex].quantity * product.price;
      setShoppingCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart
      setShoppingCart([
        ...shoppingCart,
        {
          ...product,
          quantity,
          subtotal: quantity * product.price, // Calculate subtotal
        },
      ]);
    }

    // Show a success snackbar
    setSnackbar({
      open: true,
      message: `已将 ${product.name} (${quantity} 件) 添加到购物车!`,
    });
  };

  useEffect(() => {
    console.log("SHOPPING CART", shoppingCart);
  }, [shoppingCart]);

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
          海鲜产品
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ maxWidth: "900px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, width: "100%", maxWidth: "900px" }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          购物车
        </Typography>
        {shoppingCart.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>产品名称</TableCell>
                  <TableCell align="center">单价 (¥)</TableCell>
                  <TableCell align="center">数量</TableCell>
                  <TableCell align="center">小计 (¥)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shoppingCart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="center">
                      {item.price.toFixed(2)}
                    </TableCell>
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
          <Typography variant="body1">购物车为空</Typography>
        )}
      </Box>

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
