import { Outlet } from "react-router"
import { Toaster } from 'sonner'

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const MainLayout = () => {
  return (
    <>
    <Toaster position="top-center" richColors />
    <Header/>
     <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout