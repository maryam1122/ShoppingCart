import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import logo from '../../images/logo-2.jpg';
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

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);
  const pages = [
    { name: "Home", link: "" },
    { name: "Product", link: "products" },
   
  ];
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const mode = useAppSelector((state) => state.themeReducer) as
    | "dark"
    | "light";

  const dispatch = useAppDispatch();
  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  const cart = useAppSelector((state) => state.cartReducer);
  const [cartItems, setCartItems] = useState<number>(0);
  const navigate = useNavigate();
  
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
      <MenuItem onClick={handleMenuClose}>
        <Link className="menu-subitem" to="#">
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="menu-subitem" to="/register">
          Create an account
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="menu-subitem" to="/login">
          Sign In
        </Link>
      </MenuItem>
    </Menu>
  );

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));

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

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

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
                <AccountCircle />
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