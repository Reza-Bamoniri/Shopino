import { FaShoppingBasket } from "react-icons/fa"
import { Link } from "react-router"


const EmptyBasket = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
            <span className="text-muted-foreground">Products: 0</span>
          </div>
    
          <div className="bg-background border border-slate-200 rounded-lg p-12 flex flex-col items-center justify-center min-h-100">
            <div className="bg-muted rounded-full p-6 mb-6">
              <FaShoppingBasket className="w-16 h-16 text-muted-foreground" />
            </div>
    
            <h2 className="text-xl font-semibold mb-2">Your Shopping Cart Is Empty</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-md">
              You can visit the pages below to browse more products
            </p>
    
            <div className="flex gap-4 *:px-3.5 *:py-1.5 *:rounded-lg">
              <Link to={"/products"} className="text-white bg-blue-600 hover:bg-blue-700">
               View Products
              </Link>
              <Link to={"/"} >
               Back to Home Page
              </Link>
            </div>
          </div>
        </div>
  )
}

export default EmptyBasket