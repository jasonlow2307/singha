import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Sitemark
        </Typography>
        <Box>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Testimonials</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Sign In</Button>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
