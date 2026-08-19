import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router";

import AuthContext, { type AuthContextType } from "../../context/authContext/AuthContext";




const Buttons = () => {

  const {user, isLoading}: AuthContextType = useContext(AuthContext)!
  
  
  

  return (
    <div className="flex-ic text-white! gap-3! *:rounded-md text-sm *:px-4! *:first:p-0! *:flex-center *:py-2 *:duration-150 *:hover:opacity-90">
          <Link
            to="/cart"
            className="relative border border-slate-200 rounded-lg size-10! p-0!"
          >
            <HiShoppingCart className="text-xl text-slate-700!" />
          </Link>


          {
            isLoading ? <span className="bg-[#2A2D53]">loading...</span> : user ? <Link to="/" className="bg-[#2A2D53]">Dashboard</Link> :
          <Link to="/auth" className="bg-[#2A2D53]">
            Sign up  |  Sign in
          </Link>
          }


          <Link to="/contact-us" className="bg-[#FF5F55]">
              Contact
          </Link>
        </div>
  );
};

export default Buttons