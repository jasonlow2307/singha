import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: "#F9FAFB", overflowX: "hidden" }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h6" color="textSecondary">
          海鲜品质保证，鲜味直送
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          sx={{
            mt: 2,
            lineHeight: 1.2,
            color: "rgba(0, 0, 0, 0.9)", // Base text color
          }}
        >
          鲜家海鲜供应商
          <br />
          <Box
            component="span"
            sx={{
              position: "relative",
              display: "inline-block",
              mx: 0.5, // Small margin adjustment
              mt: 1.25,
            }}
          >
            {/* Background Gradient with Blur */}
            <Box
              sx={{
                background:
                  "linear-gradient(to right, #44BCFF, #FF44EC, #FF675E)",
                filter: "blur(10px)", // Adjust blur strength
                opacity: 0.3,
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />
            {/* Foreground Text */}
            <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
              新鲜送货到你家
            </Box>
          </Box>
        </Typography>

        <Box mt={4} display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 1.5, // Spacing between the icon and text
            }}
          >
            <Icon icon="mdi:shopping" width="24" height="24" color="white" />
            购买
          </Button>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "#FFFFFF", py: 8 }}>
        <Container maxWidth="lg">
          {/* Section Title */}
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            align="center"
            sx={{ mb: 4 }}
          >
            关于我们
          </Typography>

          {/* Content Grid */}
          <Grid container spacing={4} alignItems="center">
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/about_us.png`}
                alt="About Us"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  px: 3,
                  py: 2,
                  lineHeight: 1.8,
                }}
              >
                <Typography variant="body1" color="textSecondary" paragraph>
                  我们是您值得信赖的海鲜供应商，致力于提供新鲜、美味、品质保证的海鲜产品。
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  从渔船到您的餐桌，我们确保每一份海鲜都经过严格的质量把控，并通过冷链运输将海鲜新鲜送达您的家门口。
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  我们提供种类繁多的海鲜产品，包括鱼类、贝类、虾蟹类等，适合各种美食需求。
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  让我们为您的餐桌增添新鲜的美味，和您一起享受来自大海的馈赠！
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
