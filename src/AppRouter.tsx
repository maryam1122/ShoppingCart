import { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainRoot from "./pages/MainRoot";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./pages/Cart";
import ViewProduct from "./components/product/viewProduct";
import Signup from "./components/user/signup";
import Signin from "./components/user/signin";



export default function AppRouter():JSX.Element{
    const router = createBrowserRouter([   
        { path:"",
            element:<MainRoot/>,
            children : [
            {
                path: "/",
                element: <HomePage/>,
            },

            {
                path:"products",
                children : [
                    {
                        index:true,
                        element: <ProductsPage/>
                    },
                
                ],
            },
            {
                path: "cart",
                element: <Cart />,
              },
              {
                path: "register",
                element: <Signup />,
              },
              {
                path: "Signin",
                element: <Signin />,
              },
             

              {
                path: "viewProduct/:id",
                element: <ViewProduct />,
              },
              
            {
                path:"profile",
                element:<ProfilePage/>

            },
          ],

}],

    )
    return <RouterProvider router={router}/>;
}