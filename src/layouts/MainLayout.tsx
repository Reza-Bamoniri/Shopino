import { Outlet } from "react-router"
import { Toaster } from 'sonner'

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import AuthProvider from "../context/authContext/AuthProvider"


const MainLayout = () => {
  return (
    <AuthProvider>
    <Toaster position="top-center" richColors />
    <Header/>
     <Outlet/>
    <Footer/>
    </AuthProvider>
  )
}

export default MainLayout