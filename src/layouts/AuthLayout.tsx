import { Outlet } from "react-router";


const AuthLayout = () => {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center bg-[#2a2d533a]">
    <div className="w-full! rounded-2xl p-6 md:w-106.5! bg-[#f0f0fc]">
        <Outlet/>
    </div>
    </div>
  )
}

export default AuthLayout;