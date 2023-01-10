import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {  modifyProduct, product, ProductCreate } from "../../types/product";
import axios, { AxiosResponse } from "axios";



const initialState:product[] = []
//fetch All products
export const fetchAllProduct = createAsyncThunk("fetchProducts", async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    const data = await response.data;
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
});

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProducts",
  async (id: number) => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products/" + id
      );
      const data = await response.data;
      return data;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
);
//Add product to server
 export const addProduct = createAsyncThunk(
    "addProductaToServer",
    async (product:ProductCreate ) => {
      try {
        const response: AxiosResponse<product, product> =
          await axios.post("https://api.escuelajs.co/api/v1/products/", product);
        return response.data;
      } catch (e: any) {
        throw new Error(e.message);
      }
    }
  );
//Modify product on server 

export const updateproduct = createAsyncThunk(
  "modifyProductonServer",
  async (Item: product, { dispatch }) => {
    try {
      const response = await axios.put(
        "https://api.escuelajs.co/api/v1/products/" + Item.id,
        {
          title: Item.title,
          price: Item.price,
          description: Item.description,
        }
      );
      const data = await response.data;
      dispatch(modifyItem({ update: data }));
      return data;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
);
//Delete product on server

export const deleteproduct = createAsyncThunk(
  "deleteProduct",
  async (id: number, { dispatch }) => {
    try {
      const response = await axios.delete(
        "https://api.escuelajs.co/api/v1/products/" + id
      );
      dispatch(deleteItem(id));
      return response.data;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
);


const productSlice = createSlice({
    name : "productSlice",
    initialState: initialState,
    reducers : {
        addItems: (state, action) => {
            return action.payload;
          },

          deleteItem: (state, action: PayloadAction<number>) => {
            return state.filter((item) => item.id !== action.payload);
          },
          modifyItem: (state, action: PayloadAction<modifyProduct>) => {
            if(action.payload.index){
              state[action.payload.index] = action.payload.update
            }
            else{
              const index = state.findIndex(
                (item) => item.id === action.payload.update.id
              );
              state[index] = action.payload.update;
            }
          },
          sortProducts: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
              state.sort((a, b) => a.title.localeCompare(b.title));
            } else if (action.payload === "desc") {
              state.sort((a, b) => b.title.localeCompare(a.title));
            }
        },
          
    } ,
    extraReducers : (build) => {
        build.addCase(fetchAllProduct.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
            //setState(action.payload)
        })
        build.addCase(fetchAllProduct.rejected, (state, action) => {
            console.log("error in fetching data")
            return state
        })
        build.addCase(fetchAllProduct.pending, (state, action) => {
            console.log("data is loading ...")
            return state
        });
        build.addCase(
          fetchSingleProduct.fulfilled,
          (state: product[], action: PayloadAction<product>) => {
            const find = state.find((item) => item.id === action.payload.id);
            if (find) {
              return state;
            } else {
              state.push(action.payload);
            }
          }
        );
        build.addCase(
          addProduct.fulfilled,
          (state,action) => {
            if(action.payload){
              state.push(action.payload)
            }
            else{
              return state;
            }
          }
        );
        build.addCase(
          updateproduct.fulfilled,
          (state: product[], action) => {
            const index = state.findIndex((item) => item.id === action.payload.id);
            state[index] = action.payload;
          }
        );
        
      
    },
 });

const productReducer = productSlice.reducer;
export const { modifyItem,deleteItem} = productSlice.actions;
export default productReducer