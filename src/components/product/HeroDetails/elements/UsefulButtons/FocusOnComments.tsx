import { FaComment } from "react-icons/fa";
import { Link } from "react-router";
import Tooltip from "../../../../common/tooltips/Tooltip";


const FocusOnComments = () => {
  return (
    <Tooltip text={"User Reviews"}>
      <Link to="" className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all active:*:text-sm flex-center border border-neutral-300 rounded-lg text-sky-600">
        <FaComment />
      </Link>
    </Tooltip>
  );
};

export default FocusOnComments;