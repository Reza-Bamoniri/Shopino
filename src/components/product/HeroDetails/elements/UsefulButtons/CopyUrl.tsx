import { FaShare } from "react-icons/fa";
import { useState } from "react";

import Tooltip from "../../../../common/tooltips/Tooltip";



const CopyUrl = () => {

  const [copied,setCopied] = useState(false)

  const handleCopyUrl = () => {
    const pruductUrl = location.origin + location.pathname;
    navigator.clipboard.writeText(pruductUrl);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 800);
  };

  return (
    <Tooltip text={copied ? "copied" : "copy"}>
      <button onClick={handleCopyUrl} className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all active:*:text-sm flex-center border border-neutral-300 rounded-lg text-slate-700">
        <FaShare />
      </button>
    </Tooltip>
  );
};

export default CopyUrl;