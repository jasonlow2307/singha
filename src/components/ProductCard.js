import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // Manage quantity locally
  const { t } = useTranslation(); // Translation hook

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
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

      {/* Product Content */}
      <CardContent
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Product Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          {product.name}
        </Typography>

        {/* Product Description */}
        <Typography variant="body2" sx={{ color: "#666", my: 1 }}>
          {product.description}
        </Typography>

        {/* Pricing */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            my: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#F48E02",
              fontSize: "18px",
            }}
          >
            {t("product_card.single_price_label")}: RM{" "}
            {product.prices.single.toFixed(2)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "green",
              fontSize: "18px",
            }}
          >
            {t("product_card.bundle_price_label")}: RM{" "}
            {product.prices.bundle.toFixed(2)}
          </Typography>
        </Box>

        {/* Quantity Selector */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl>
            <InputLabel id={`quantity-label-${product.id}`}>
              {t("product_card.quantity_label")}
            </InputLabel>
            <Select
              labelId={`quantity-label-${product.id}`}
              id={`quantity-select-${product.id}`}
              value={quantity}
              label={t("product_card.quantity_label")}
              onChange={(e) => setQuantity(Number(e.target.value))}
              sx={{
                minWidth: "150px",
                maxHeight: "40px",
                borderRadius: "20px",
                bgcolor: "#f9f9f9",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F48E02",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d97801",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF5722",
                },
                fontSize: "16px",
                padding: "10px 14px",
              }}
            >
              {[...Array(5).keys()].map((value) => (
                <MenuItem key={value + 1} value={value + 1}>
                  {value + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Add to Cart Button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              maxWidth: "125px",
              height: "50px",
            }}
            onClick={handleAddToCart}
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
            <Typography>{t("product_card.add_to_cart_button")}</Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
