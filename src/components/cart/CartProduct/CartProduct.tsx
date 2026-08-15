import Entity from "./elements/Entity"
import Title from "./elements/Title"
import Variants from "./elements/Variants"
import product1 from "../../../assets/images/product-1.jpg"


const CartProduct = () => {
  return (
    <article className="w-full p-8 border rounded-xl border-slate-200  flex flex-col justify-between h-103.5">
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="space-y-5">
              <Title text="Cooler Master GA2711 27-inch Gaming Monitor" />
              <Variants />
            </div>
            <div className="flex-center">
              <img
                src={product1}
                alt="Product"
                className="max-h-42"
              />
            </div>
          </div>
    
          <div className="w-full flex-between px-10 h-20 rounded-xl border border-slate-200 bg-slate-50">
    
            {/* Product Entity  */}
            <Entity count={1} onCountChange={() => {}} />
    
            {/* Product Price */}
            <div>
              <div className="flex-ic gap-1">
                <p className="text-xl">
                  <strong>{Number(15_000).toLocaleString()}</strong>
                </p>
                <span>$</span>
              </div>
            </div>
          
          </div>
        </article>
  )
}

export default CartProduct