import { Outlet } from "react-router"
import Sidebar from "../components/common/sidebar/Sidebar"
import AuthProvider from "../context/authContext/AuthProvider"


const CmsLayout = () => {
  return (
    <AuthProvider>
       <main id="application" className="flex gap-10 min-h-dvh bg-zinc-50">
          <Sidebar />
          <section className="container mx-auto  py-4" id="content">
            <Outlet />
          </section>
      </main>
   </AuthProvider>
  )
}

export default CmsLayout