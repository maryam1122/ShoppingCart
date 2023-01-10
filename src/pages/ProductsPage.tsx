import React, { useEffect, useState } from 'react'
import Products from '../components/product/products'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { fetchAllProduct } from '../redux/reducers/productReducer';


const ProductsPage = () => {
  const [toBeSearched, setToBeSearched] = useState("");
  const products = useAppSelector((state) => {
    return state.productReducer.filter((item:any) => {
      return item.title.toLowerCase().includes(toBeSearched.toLowerCase());
    });
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [fetchAllProduct]);

  return (
    <><Products/></>
  )
}

export default ProductsPage