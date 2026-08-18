import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUS from "../pages/AboutUS";
import ContactUS from "../pages/ContactUS";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/Auth";


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
}
]);

export default router;