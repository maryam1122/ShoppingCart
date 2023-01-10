import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { async } from "q";
import {User , UserloginResponse ,UserLogin,UserInitialState,CreateUserWithFile} from "../../types/user";




 const getFromLocalStorage = () =>{
    const userSession = localStorage.getItem("loggedInUser");
    if (userSession) {
      return JSON.parse(userSession).currentUser;
    } else {
      return null;
    }
}
//create new user with image upload
export const createUser = createAsyncThunk(
    "userRegister",
    async({image,user} : CreateUserWithFile) => {
        try {
            const imgresponse = await axios.post ("https://api.escuelajs.co/api/v1/files/upload",
             {file :image && image [0]},
             {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
             );
             const img = await imgresponse.data.location;
             const response : AxiosResponse<User,any> = await axios.post("https://api.escuelajs.co/api/v1/users/",
             {...user , avatar :img}
             );
             const data = await response.data;
             return data;
        }
        catch(error :any) {
            console.log(error.message);
        }

    }
)
const initialstate:UserInitialState ={
    userList:[],
    currentUser:getFromLocalStorage(),
}
// Authenticate user login

export const AuthenticateUserLogin = createAsyncThunk (
    "Jwtlogin",
    async({email,password}:UserLogin , thunkAPI)=>{
        try{
            const reponse = await axios.post("https://api.escuelajs.co/api/v1/auth/login",
            {email,password}
            );
            const data : UserloginResponse = reponse.data;
            
            const result = await thunkAPI.dispatch(loginUser(data.access_token));
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(
                    {
                        access_token :data.access_token,
                        currentUser : result.payload,
                    } )
            );
            return result.payload as User;
        }
        catch (e :any ){
            const error = e as AxiosError;
            return error;
        }
    }
);

export const loginUser = createAsyncThunk (
    "loginUser",
    async(access_token : string) =>{
        try {
           const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile" ,{
            headers : {
                Authorization : `Bearer ${access_token}`
            },

           });
           const data : User =  await response.data;
           return data;

        }
        catch (e : any){
            const error = e as AxiosError;
            return error;
        }
    }
);


const userSlice = createSlice({
    name: "userSlice",
    initialState: initialstate,
    reducers: {
      userLogout: (state) => {
        localStorage.removeItem("loggedInUser");
        
        return state;
      },
    },
    extraReducers: (build) => {
      build
    
        .addCase(AuthenticateUserLogin.fulfilled, (state, action) => {
          if (action.payload instanceof AxiosError) {
            return state;
          }
          state.currentUser = action.payload;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          if (action.payload instanceof AxiosError) {
            return state;
          }
          state.currentUser = action.payload;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          if (action.payload) {
            state.userList.push(action.payload);
          }
          return state;
        });
    },
  });
  
  const userReducer = userSlice.reducer;
  export const { userLogout } = userSlice.actions;
  export default userReducer;