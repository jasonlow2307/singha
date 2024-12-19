import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          sx={{
            width: 100,
            borderRadius: 2,
            boxShadow: 3,
            my: 2.5,
          }}
        />
        <Box>
          <Button variant="contained" color="primary">
            购买
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
