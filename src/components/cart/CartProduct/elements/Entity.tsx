import { FaMinus, FaPlus } from "react-icons/fa";

type EntityProps = {
    count: number
     onCountChange: () => void
}




const Entity = ({ count, onCountChange } : EntityProps) => {
  // Button ClassNames
  const buttonCSS =
    "size-8 rounded-md bg-white flex-center border border-neutral-200 text-slate-600";

  return (
    <div className="flex-center gap-5">
      <button className={buttonCSS}>
        <FaMinus />
      </button>

      <p>{Number(count).toLocaleString()}</p>

      <button className={buttonCSS}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Entity;