import { BiInfoCircle } from "react-icons/bi";


const NoticeDescription = () => {
  return (
    <div className="text-xs bg-yellow-600/8 rounded-l-lg border-r-3 text-yellow-600 p-5 flex items-start gap-4">
      <BiInfoCircle className="text-6xl! max-h-max!" />
      <p>
       Due to currency fluctuations, orders for this product (custom-made product) cannot be canceled due to a change of mind.
      </p>
    </div>
  );
};

export default NoticeDescription;