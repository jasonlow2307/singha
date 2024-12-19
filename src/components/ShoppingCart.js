import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";

const ShoppingCartPage = () => {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120.0,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smartphone Stand",
      price: 25.0,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Shopping Cart
      </Typography>

      {/* Cart Items */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          bgcolor: "#fff",
          borderRadius: 4,
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          p: 2,
        }}
      >
        {cartItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #e0e0e0",
            }}
          >
            {/* Product Image */}
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              sx={{
                width: 100,
                height: 100,
                borderRadius: 2,
                objectFit: "cover",
                m: 1,
              }}
            />
            {/* Product Details */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                gap: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Quantity: {item.quantity}
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
            <Typography
              sx={{
                fontWeight: "bold",
                mr: 2,
              }}
            >
              ${item.price * item.quantity}
            </Typography>
          </Card>
        ))}
        {/* Divider */}
        <Divider sx={{ my: 2 }} />
        {/* Total Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Total:
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            ${calculateTotal().toFixed(2)}
          </Typography>
        </Box>
        {/* Checkout Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            borderRadius: 3,
            background: "linear-gradient(to right, #4caf50, #81c784)",
            "&:hover": {
              background: "linear-gradient(to right, #388e3c, #66bb6a)",
            },
          }}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCartPage;
