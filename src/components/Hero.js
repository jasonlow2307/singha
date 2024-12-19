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
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <Box
      sx={{
        overflowY: "scroll", // Enable vertical scrolling
        scrollSnapType: "y mandatory", // Snap scrolling
        scrollBehavior: "smooth", // Smooth scrolling
        height: "100vh", // Full viewport height
        "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
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
            海鲜品质保证，鲜味直送
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
                鲜家海鲜供应商 新鲜送货到你家
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
                width: "200px",
                "&:hover": {
                  background: "linear-gradient(to right, #FF5A3C, #FF9E33)",
                },
              }}
            >
              <Icon icon="mdi:shopping" width="24" height="24" color="white" />
              <Typography variant="button" fontSize={25} fontWeight={600}>
                购买
              </Typography>
            </Button>
          </Box>
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
            关于我们
          </Typography>
          <Grid container spacing={4} alignItems="center">
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
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ fontSize: "1.2rem" }}
                  paragraph
                >
                  我们是您值得信赖的海鲜供应商，致力于提供新鲜、美味、品质保证的海鲜产品。
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ fontSize: "1.2rem" }}
                  paragraph
                >
                  从渔船到您的餐桌，我们确保每一份海鲜都经过严格的质量把控，并通过冷链运输将海鲜新鲜送达您的家门口。
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ fontSize: "1.2rem" }}
                  paragraph
                >
                  我们提供种类繁多的海鲜产品，包括鱼类、贝类、虾蟹类等，适合各种美食需求。
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.2rem" }}
                  color="textSecondary"
                >
                  让我们为您的餐桌增添新鲜的美味，和您一起享受来自大海的馈赠！
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          backgroundColor: "#FFF7ED",
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
            我们的服务
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "快速送货",
                description: "冷链运输，保证海鲜新鲜直达。",
                image: "/service_1.jpeg",
              },
              {
                title: "品质保障",
                description: "严格把控质量，提供最优海鲜。",
                image: "/service_2.jpeg",
              },
              {
                title: "多样选择",
                description: "鱼类、虾蟹类、贝类应有尽有。",
                image: "/service_3.jpeg",
              },
            ].map((service, index) => (
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
            ))}
          </Grid>
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
            热门海鲜产品
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: "老虎虾",
                image: "black_tiger_prawn.jpg",
                description: "优质老虎虾，肉质鲜嫩，适合烧烤或爆炒。",
              },
              {
                name: "鱿鱼圈",
                image: "sotong_ring.jpg",
                description: "精选鱿鱼圈，适合炸制或搭配沙拉。",
              },
              {
                name: "明虾",
                image: "white_prawn.jpg",
                description: "明虾含高蛋白，适合清蒸或红烧。",
              },
            ].map((product, index) => (
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
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Box
        sx={{
          height: "calc(100vh - 0px)",
          scrollSnapAlign: "start",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #FFEDD5, #FF7A59)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h3"
                fontWeight="bold"
                sx={{ mb: 3 }}
              >
                联系我们
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }} fontSize={20}>
                如果您有任何问题或需要咨询，请随时联系我们，我们将竭诚为您服务！
              </Typography>
              <Link
                href="https://wa.me/60193205676?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Singha.
"
                target="_blank"
                rel="noopener"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#FF7A59",
                    px: 4,
                    py: 1.5,
                    gap: 1,
                    borderRadius: 3,
                    "&:hover": { backgroundColor: "#FFEDD5" },
                  }}
                >
                  <Icon
                    icon="fluent:call-16-filled"
                    width="24"
                    height="24"
                    color="#FF7A59"
                  />
                  立即联系
                </Button>
              </Link>
            </Grid>

            {/* Right Section (Image) */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Optional: centers vertically if needed
              }}
            >
              <Box
                component="img"
                src="/contact_us.png"
                alt="Contact Us"
                sx={{
                  width: "450px",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
