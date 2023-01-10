import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import logo from '../../images/logo.jpg';
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  Tooltip,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { toggleThemeMode } from "../../redux/reducers/themeReducer";
import { useEffect, useState } from "react";
import { userLogout } from "../../redux/reducers/userReducer";


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);
  const pages = [
    { name: "Home", link: "" },
    { name: "Product", link: "products" },
   
  ];

  const mode = useAppSelector((state) => state.themeReducer) as
  | "dark"
  | "light";


const toggleTheme = () => {
  dispatch(toggleThemeMode());
};
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

 

  const cart = useAppSelector((state) => state.cartReducer);
  const [cartItems, setCartItems] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.currentUser)

  const isLogin = localStorage.getItem("loggedInUser");
  console.log(isLogin)
  const handleLogOut = () => {
    dispatch(userLogout());
    navigate("/Signin");
  };
  
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.count;
    });
    setCartItems(count);
  }, [cart]);
  

  
  const renderMenu = (
    <Menu
      sx={{ mt: "45px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    > 
    { !isLogin ? ( 
       
       <>
       <MenuItem onClick={handleMenuClose}>
        <Link className="menu-subitem" to="/register">
          Create an account
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="menu-subitem" to="/Signin">
          Sign In
        </Link>
      </MenuItem></>) : (
      <>
    
       <MenuItem onClick={handleMenuClose}>
      <Link className="menu-subitem" to="/profile">
        Profile
      </Link>
    
    </MenuItem>
    <MenuItem onClick={() => handleLogOut()}>
                  Log out
                </MenuItem></>
    
      
     )}
      
    </Menu>
  );

  

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
           

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/"}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                alignItems: "center",
                flexGrow: 0,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
              src={logo}
              alt={"Logo"}
              loading="lazy"
              className="header-logo"
            />
            
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{ my: 2, color: "white", display: "block" }}
                  component={Link}
                  to={page.link}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

           

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="light-modes"
                color="inherit"
                sx={{marginLeft: "auto"}}
                onClick = {toggleTheme}
              >
                {mode === "dark" ? <ModeNightIcon /> : <LightModeIcon /> }
              </IconButton>
              <IconButton
            sx={{ marginRight: 3 }}
            onClick={() => {
              navigate("/Cart");
            }}
          >
            <Badge
              badgeContent={cartItems}
              color="warning"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              {" "}
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

              <IconButton 
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                
              > 
              {!isLogin ? <AccountCircle />   : <> 
              {user && (
                <img
                  key={user.id}
                  className="avatar-pic"
                  src={user.avatar}
                  alt="user-avatar"
                />
              )}
  </>}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
export default Header;