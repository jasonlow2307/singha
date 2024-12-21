import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        bgcolor: "#f5f5f5",
        color: "#333",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Link href="https://www.instagram.com" target="_blank" rel="noopener">
          <Icon
            icon="mdi:instagram"
            width="32"
            height="32"
            color="#E1306C"
            title="Instagram"
          />
        </Link>
        <Link
          href="https://wa.me/60193205676?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Singha."
          target="_blank"
          rel="noopener"
        >
          <Icon
            icon="mdi:whatsapp"
            width="32"
            height="32"
            color="#25D366"
            title="WhatsApp"
          />
        </Link>
        <Link
          href="https://www.xiaohongshu.com/user/profile/61dfd99500000000100087ea?xsec_token=&xsec_source=pc_note"
          target="_blank"
          rel="noopener"
        >
          <Icon
            icon="simple-icons:xiaohongshu"
            width="32"
            height="32"
            color="#FF0000"
            title="Xiaohongshu"
          />
        </Link>
      </Box>

      {/* Address */}
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mb: 2, fontSize: "14px" }}
      >
        Address: No.149-G, Block J, Tanming Boulevard, Jalan Meranti Jaya 3/1,
        Taman Meranti Jaya, 47120, Puchong, Selangor
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mb: 2, fontSize: "14px" }}
      >
        Phone: +60 19 320 5676
      </Typography>

      {/* Copyright */}
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Singha. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
