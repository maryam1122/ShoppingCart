import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
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
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
            //setState(action.payload)
        })
        build.addCase(fetchAllProducts.rejected, (state, action) => {
            console.log("error in fetching data")
            return state
        })
        build.addCase(fetchAllProducts.pending, (state, action) => {
            console.log("data is loading ...")
            return state
        })
      
    }
    }
)

const productReducer = productSlice.reducer
export default productReducer