import React from "react";
import { Icon } from "@iconify/react";
import { Box, keyframes } from "@mui/material";

// Define the bounce animation
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const WhatsAppIcon = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24, // Increased for better spacing
        right: 24, // Increased for better spacing
        zIndex: 1000, // Ensure it appears above other elements
        backgroundColor: "#25D366", // WhatsApp green
        borderRadius: "50%",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center", // Ensures icon is centered vertically
        justifyContent: "center", // Ensures icon is centered horizontally
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        animation: `${bounceAnimation} 2s infinite`, // Apply the bounce animation
        "&:hover": {
          backgroundColor: "#1EBE57", // Slightly darker on hover
        },
        display: { xs: "none", sm: "flex" }, // Show only on larger devices
      }}
      onClick={() => {
        window.open(
          "https://wa.me/60193205676?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Singha.",
          "_blank"
        );
      }}
    >
      <Icon
        icon="ic:baseline-whatsapp"
        width="32"
        height="32"
        color="white"
        style={{
          margin: "0 auto", // Ensures the icon is perfectly centered
        }}
      />
    </Box>
  );
};

export default WhatsAppIcon;
