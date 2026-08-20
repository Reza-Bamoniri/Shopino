import { Outlet } from "react-router"


import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import AuthProvider from "../context/authContext/AuthProvider"


const MainLayout = () => {
  return (
    <AuthProvider>
    
    <Header/>
     <Outlet/>
    <Footer/>
    </AuthProvider>
  )
}

export default MainLayout