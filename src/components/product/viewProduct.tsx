import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import EuroIcon from "@mui/icons-material/Euro";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EffectCube, Navigation, Pagination } from "swiper";
import "swiper/css/effect-cube";
import "swiper/css";
import "swiper/css/pagination";

import { product } from "../../types/product";
import { useDispatch } from "react-redux";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import GridItem from "../../Themes/gridTheme";
import { addtoCart } from "../../redux/reducers/cartReducer";
import { useAppDispatch } from "../../hooks/reduxHook";





const ViewProduct = () => {
const stateObj = useLocation();
const [product, setProduct] = useState<product>(stateObj.state);
const navigate = useNavigate();
const dispatch = useAppDispatch();

  return (
    <Box marginTop={20} marginLeft={4} marginRight={4}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5} sx={{ width: "100%", height: "100%" }}>
        <Swiper
          modules={[EffectCube, Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          grabCursor={true}
          effect="cube"
          centeredSlides
        >
          {product.images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={item}
                  alt={"Error Loading the Image"}
                  sx={{ width: "100%", height: 400 }}
                ></Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
      <Grid item xs={12} md={7} sx={{ width: "100%", height: "100%" }}>
        <GridItem>
          <Typography variant="h6">{product.title}</Typography>
        </GridItem>
        <GridItem>
          <Typography>{product.description}</Typography>
        </GridItem>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12}>
            <GridItem>
              <Typography variant="h6"> Category</Typography>
              <Divider sx={{ marginBottom: 3 }} />
              <GridItem>
                <Typography> {product.category.name}</Typography>
              </GridItem>
            </GridItem>
          </Grid>
          <Grid item xs={12}>
            <GridItem>
              <Typography variant="h6">Price</Typography>
              <Divider sx={{ marginBottom: 3 }} />
              <Typography
                variant="inherit"
                sx={{ fontSize: 14, fontWeight: 700 }}
                color="secondary"
              >
                {product.price} <EuroIcon sx={{ fontSize: 12 }} />
              </Typography>
            </GridItem>
            <GridItem sx={{ height: "54%" }}>
              <Button
                variant="contained"
                sx={{ marginTop: 4 }}
                onClick={(e) => {
                  dispatch(addtoCart(product));
                }}
              >
                {" "}
                Add to Cart
              </Button>
            </GridItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box>
    
  )
}

export default ViewProduct;