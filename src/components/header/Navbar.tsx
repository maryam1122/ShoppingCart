import React from "react";

import { AppBar, Toolbar, IconButton, Typography, Stack, Tabs, Tab } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import ProductsPage from "../../pages/ProductsPage";


export const Navbar = () => {
  return (
    <AppBar position="static" sx={{background: "#063970"}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shopping Cart
        </Typography>
        <Stack direction="row" spacing={2}>
         <Tabs textColor="inherit">
            
            <Tab label = "About" />
         </Tabs>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
