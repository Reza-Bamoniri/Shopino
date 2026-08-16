import { useEffect } from "react";
import { FaComment } from "react-icons/fa";
import { Link, useLocation } from "react-router";

import Tooltip from "../../../../common/tooltips/Tooltip";


const FocusOnComments = () => {

  const location = useLocation()
  
  useEffect(() => {
    
  const hash = location.hash;
  if(hash){
    const commentElem = document.querySelector(hash);

    commentElem?.scrollIntoView({behavior:"smooth"})
  }
    
    
  }, [location])
  
  

  return (
    <Tooltip text={"User Reviews"}>
      <Link to="#comments-container" className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all active:*:text-sm flex-center border border-neutral-300 rounded-lg text-sky-600">
        <FaComment />
      </Link>
    </Tooltip>
  );
};

export default FocusOnComments;