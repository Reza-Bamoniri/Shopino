
import Drawer from "../Drawer/Drawer";
import ProductDrawerInput from "./ProductDrawerInput";

type ProductDrawerProps = {
    isOpen: boolean;
    toggleDrawer: () => void
}

const ProductDrawer = ({ isOpen, toggleDrawer }: ProductDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={toggleDrawer} title="Create Product" className="">
      <div className="space-y-4 mt-5 px-6">
        <ProductDrawerInput
          label="title"
          placeholder="example: Apple iPhone 17 Pro Max"
          type="text"
        />

        <ProductDrawerInput
          label="link"
          placeholder="iphone-17-promax ..."
          type="text"
        />

        <ProductDrawerInput
          label="image"
          placeholder="iphone-17-promax ..."
          type="file"
        />

        <div>
          <label htmlFor="product-details">Description</label>
          <textarea
            id="product-details"
            name=""
            className="w-full h-10 text-sm rounded-md outline-none primary-border px-3 mt-2 min-h-30 pt-2"
            placeholder="US Version, 512GB, eSIM, Deep Blue- Unlocked ..."
          ></textarea>
        </div>

        <div className="mt-5 flex items-center justify-start gap-2">
          <button className="px-4 py-2 rounded-md bg-linear-to-t from-yellow-600 text-sm to-yellow-500 text-white">
           Add Product
          </button>
          <button onClick={toggleDrawer} className="px-4 py-2 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/15 ">
            Cancel
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;
