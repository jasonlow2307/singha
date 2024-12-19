import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { Icon } from "@iconify/react";

const ShoppingPage = () => {
  // Seafood product data
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

  const handleAddToCart = (productName) => {
    alert(`已将 ${productName} 添加到购物车!`);
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
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1, // Add spacing between the icon and text
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

      {/* Products Grid */}
      <Grid container spacing={4} sx={{ maxWidth: "900px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <Card
              sx={{
                bgcolor: "#fff",
                borderRadius: 3,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              {/* Product Image */}
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: "200px",
                  objectFit: "contain",
                  mt: 5,
                  mb: 2,
                  borderRadius: "12px",
                }}
              />

              {/* Product Details */}
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", my: 1 }}>
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#F48E02", my: 1 }}
                >
                  ¥{product.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#F48E02",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 20,
                    px: 3,
                    "&:hover": {
                      bgcolor: "#d97801",
                    },
                  }}
                  onClick={() => handleAddToCart(product.name)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                    }}
                  >
                    <Icon icon="zondicons:add-solid" />
                  </Box>
                  <Typography>购买</Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShoppingPage;
