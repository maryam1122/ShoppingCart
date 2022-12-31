import { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainRoot from "./pages/MainRoot";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";

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
                    {
                        path :"id",
                        element: <ProductPage/>
                    }
                ],
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