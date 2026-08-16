import AddToCart from "./elements/AddToCart";
import Counseling from "./elements/Counseling";
import MiniProduct from "./elements/MiniProduct";
import NoticeDescription from "./elements/NoticeDescription";
import Price from "./elements/Price";



const Sidebar = () => {
  return (
    <aside className="col-span-2 w-full rounded-xl border border-neutral-200 max-h-max sticky top-5 p-5 space-y-5">
        <MiniProduct />
        <NoticeDescription />
        <Price />
        <AddToCart />
        <Counseling />
    </aside>
  );
};

export default Sidebar;