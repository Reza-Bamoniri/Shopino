import ProductColors from "./elements/ProductColors/ProductColors";
import ProductVariants from "./elements/ProductVariants/ProductVariants";
import UsefulButtons from "./elements/UsefulButtons/UsefulButtons";
import product1 from "../../../assets/images/product-1.jpg"


const HeroDetails = ({ product }) => {
  return (
    <>
      <section id="product-hero-details">
        <div className="col-span-6 w-full">
          <div className="flex items-center mb-10 justify-end">
            <UsefulButtons />
          </div>
          <div className="grid grid-cols-2 items-start">
            <div className="h-112.5">
              <img
                src={product1}
                alt="Product"
                className="size-full object-cover!"
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="font-bold text-slate-800">
                   Cooler Master GA2711 27-inch Gaming Monitor
                  </h1>
                  <p className=" text-slate-500 text-xs">
                    Galaxy A06 4GB 64GB 2Sim Mediatek MT6769 Helio G85 (12
                   nm) 50 5000 mAh 6.7 Inch Android 14
                  </p>
                </div>

                <ProductColors />
              </div>

              <ProductVariants />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroDetails;
