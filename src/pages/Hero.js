import React from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Hero = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        height: "100vh",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: "url('/hero_banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 140px)",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h6" color="textSecondary">
            {t("hero_section.subtitle")}
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{ mt: 2, lineHeight: 1.2, color: "rgba(0, 0, 0, 0.9)" }}
          >
            <Box
              component="span"
              sx={{
                position: "relative",
                display: "inline-block",
                mx: 0.5,
                mt: 1.25,
              }}
            >
              <Box
                sx={{
                  background: "linear-gradient(to right, #FF7A59, #FFB347)",
                  filter: "blur(10px)",
                  opacity: 0.3,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
              <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
                {t("hero_section.title")}
              </Box>
            </Box>
          </Typography>
          <Box mt={4} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #FF7A59, #FFB347)",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                minWidth: "200px",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #FF5A3C, #FF9E33)",
                },
              }}
              onClick={() => onNavigate("shopping")}
            >
              <Icon icon="mdi:shopping" width="24" height="24" color="white" />
              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 600,
                  textTransform: "none", // Prevent uppercase in Typography
                }}
              >
                {t("hero_section.buy_button")}
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Products Section */}
      <Box
        sx={{
          height: "calc(100vh - 140px)",
          scrollSnapAlign: "start",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            fontWeight="bold"
            align="center"
            sx={{ mb: 6, color: "#FF7A59" }}
          >
            {t("products_section.title")}
          </Typography>
          <Grid container spacing={4}>
            {t("products_section.products", { returnObjects: true }).map(
              (product, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box
                    sx={{
                      perspective: "1000px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "275px",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s",
                        "&:hover": {
                          transform: "rotateY(180deg)",
                        },
                      }}
                    >
                      {/* Front of the card */}
                      <Paper
                        elevation={3}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          borderRadius: 2,
                          overflow: "hidden",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={product.image}
                          alt={product.name}
                          sx={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                          }}
                        />
                        <Box sx={{ p: 2 }}>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            fontSize={25}
                          >
                            {product.name}
                          </Typography>
                        </Box>
                      </Paper>

                      {/* Back of the card */}
                      <Paper
                        elevation={3}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: -15,
                          width: "100%",
                          height: "275px",
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          backgroundColor: "#FF7A59",
                          color: "white",
                          p: 2,
                        }}
                      >
                        <Typography variant="body1" fontSize={25}>
                          {product.description}
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          backgroundColor: "#FFF5E1",
          height: "calc(100vh - 140px)",
          scrollSnapAlign: "start",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            fontWeight="bold"
            align="center"
            sx={{ mb: 4, color: "#FF7A59" }}
          >
            {t("about_us_section.title")}
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4.5}>
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
                {t("about_us_section.content", { returnObjects: true }).map(
                  (paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      color="textSecondary"
                      sx={{ fontSize: "1.2rem", mb: 2 }}
                    >
                      {paragraph}
                    </Typography>
                  )
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          backgroundColor: "#FFF7ED",
          height: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            fontWeight="bold"
            align="center"
            sx={{ mb: 4, color: "#FF7A59" }}
          >
            {t("services_section.title")}
          </Typography>
          <Grid container spacing={4}>
            {t("services_section.services", { returnObjects: true }).map(
              (service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: 2,
                      "&:hover": { boxShadow: 6 },
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                      {service.title}
                    </Typography>
                    <img
                      src={service.image}
                      width={250}
                      style={{ borderRadius: "25px" }}
                      alt="Service"
                    />
                    <Typography variant="body1" color="textSecondary" mt={2}>
                      {service.description}
                    </Typography>
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
