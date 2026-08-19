import { createBrowserRouter, redirect } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUS from "../pages/AboutUS";
import ContactUS from "../pages/ContactUS";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/Auth";
import CmsLayout from "../layouts/CmsLayout";
import Products from "../pages/Dashboard/manager/Products";
import Orders from "../pages/Dashboard/manager/Orders";
import HomePage from "../pages/Dashboard/manager/Home";


const router = createBrowserRouter([
{
    path: "/",
    element: <MainLayout/>,
    children:[
        {index: true, element: <Home/>},
        { path: "about-us", element: <AboutUS/> },
        { path: "contact-us", element: <ContactUS/> },
        { path: "cart", element: <Cart/> },
        { path: "product/:productID", element: <Product/> },

        {path: "auth", element: <AuthLayout/>,
            children: [
                {index: true, element: <Auth/>}
            ]
        }
    ]
},

{
    path: "dashboard", 
    element: <CmsLayout/>,
    children: [
        {
            path: "manager",
            children: [
                {index: true, loader: () => redirect("home") },
                { path: "home", element: <HomePage/> },
                { path: "products", element: <Products/> },
                { path: "orders", element: <Orders/> },
            ]
        }
    ]

}
]);

export default router;