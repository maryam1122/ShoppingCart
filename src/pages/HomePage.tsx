import React from "react";
import MainSlider from "../components/home/MainSlider";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { Typography } from "@mui/material";
import LatestProducts from "../components/home/LatestProducts";
import { fetchAllProducts } from "../redux/reducers/productReducer";
import products from "../components/product/products";

const HomePage = () => {
  const [toBeSearched, setToBeSearched] = useState("");
  const products = useAppSelector((state) => {
    return state.productReducer.filter((item) => {
      return item.title.toLowerCase().includes(toBeSearched.toLowerCase());
    });
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <MainSlider />
      <Typography variant="h6" gutterBottom sx={{ my: 2 }}>
        New Products
      </Typography>
      <LatestProducts list={products} />
    </div>
  );
};

export default HomePage;
