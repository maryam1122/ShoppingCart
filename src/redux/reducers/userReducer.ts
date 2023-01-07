import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { async } from "q";
import { CreateUser,User } from "../../types/user";


export const createUser = createAsyncThunk(
    "createUser",
    async(user:CreateUser) =>{
        try{
            const apiResponse:AxiosResponse<User,User> = await axios.post(
                "https://api.escuelajs.co/api/v1/users/",
                  user
            );
            return apiResponse.data;
        }
        catch(e:any)
        {
            throw new Error(e.message);
        }
    }
)

const initialState: User[] = [];
const userSlice = createSlice({
    name : "userSlice",
    initialState : initialState,
    reducers:{

    },
    extraReducers : (build) => {
        build.addCase(createUser.fulfilled , (state ,action)=>{
            if(action.payload){
                state.push(action.payload);
            }else {
                return state;
            }
        });
    },
    }
);

const userReducer = userSlice.reducer;
export const {} =userSlice.actions;
export default userReducer;