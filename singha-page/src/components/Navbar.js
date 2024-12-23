import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sitemark Dashboard
        </Typography>
        <Button color="inherit">Sign In</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
