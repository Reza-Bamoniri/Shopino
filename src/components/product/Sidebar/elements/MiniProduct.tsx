import product1 from "../../../../assets/images/product-1.jpg"

const MiniProduct = () => {
  return (
    <article className="flex items-center gap-4">
      <div className="size-16.5! min-w-16.5!">
        <img
          src={product1}
          alt="Product"
          className="size-full "
        />
      </div>
      <div>
        <h3 className="text-slate-800 text-sm! line-clamp-2">
          <strong>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, magnam.
          </strong>
        </h3>
      </div>
    </article>
  );
};

export default MiniProduct;