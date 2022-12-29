import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../types/product";
import { Axios } from "axios";


const initialState:product[] = []

 export const fetchAllProducts = createAsyncThunk(
    "fetchAllProducts",
    async() => {
        try{
             const jsondata = await fetch("https://api.escuelajs.co/api/v1/products")
             const data = await jsondata.json();
             return data
        }
        catch (e:any){
            throw new Error(e.message)

        }
    }
 )

const productSlice = createSlice({
    name : "productSlice",
    initialState: initialState,
    reducers : {
          
    } ,
    extraReducers : (build) => {
        build.addCase(fetchAllProducts.fulfilled,(state,action) =>{
            return action.payload
        })
    }
})

const productReducer = productSlice.reducer
export default productReducer