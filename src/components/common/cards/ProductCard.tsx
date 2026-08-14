import { Link } from "react-router";

import product1 from "../../../assets/images/product-1.jpg"

const ProductCard = () => {
  return (
    <article className="w-full h-64 relative space-y-3 flex pl-2 justify-between flex-col">
      <Link
        className="absolute size-full"
        to={`/product/${crypto.randomUUID()}`}
      />

      <header className="h-34.5 flex-center w-full">
        <img
          src={product1}
          className="h-full object-cover"
        />
      </header>
      <main className="h-full">
        <p className="font-bold  line-clamp-2 text-slate-700 text-sm">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque possimus eligendi laborum voluptas ad aspernatur distinctio autem necessitatibus quidem. Dolores quam magnam deserunt velit quas? Delectus, accusantium eius! Quisquam.
        </p>
      </main>
      <footer className="mt-auto! flex items-end justify-start">
        <div className="flex-ic gap-1">
          <p className="font-black">
            {Number(27_000).toLocaleString()}
          </p>
          <div className="text-slate-600 text-xs">$</div>
        </div>
      </footer>
    </article>
  );
};

export default ProductCard;
