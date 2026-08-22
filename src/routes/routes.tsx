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
import ManagerProducts from "../pages/Dashboard/manager/Products";
import Orders from "../pages/Dashboard/manager/Orders";
import HomePage from "../pages/Dashboard/manager/Home";
import { getMe } from "../services/auth.service";
import Forbidden from "../pages/Forbidden";
import NotFound from "../pages/NotFound";


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
        },
        { path: "forbidden", element: <Forbidden /> },
    ]
},
{path: "*", element: <NotFound/>},

{
    path: "dashboard", 
    element: <CmsLayout/>,
    children: [
        {
            path: "manager",
            loader: async () => {
               try {

                const {data} = await getMe()
                console.log(data);
                
                
                if(data.user.phone !== "09135783451"){
                   return redirect("/forbidden")
                   
                   
                }

               return data.user
                
                
               } catch (error) {
                console.log(error);
                
                return redirect("/auth")
               }
            },
            children: [
                {index: true, loader: () => redirect("home") },
                { path: "home", element: <HomePage/> },
                { path: "products", element: <ManagerProducts/> },
                { path: "orders", element: <Orders/> },
            ]
        }
    ]

}
]);

export default router;