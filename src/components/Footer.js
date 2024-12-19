import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: "center", bgcolor: "#f5f5f5" }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Sitemark. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
