import { RouterProvider } from "react-router"
import router from "./routes/routes"
import { Toaster } from "sonner"


const App = () => {
  return (
    <>
    <Toaster position="top-center" richColors />
    <RouterProvider router={router} />
    </>
  )
}

export default App