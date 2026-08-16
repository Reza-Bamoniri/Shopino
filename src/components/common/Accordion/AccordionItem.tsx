import { BiChevronLeft } from "react-icons/bi"
import { useState } from "react"

import type { aboutUsDataType } from "../../../types/aboutUsDataType"


const AccordionItem = ({ label, content }: aboutUsDataType) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openAccordionItem = () => {
   setIsOpen(!isOpen) 
  }

  return (
    <div>
          <div
            className={`${isOpen ? "bg-blue-400/14 text-blue-500" : ""} flex-between select-none h-12 text-sm px-4 flex-ic duration-300 hover:bg-slate-50 active:*:scale-95 min-h-20 group cursor-pointer`}
            tabIndex={1}
            onClick={openAccordionItem}
          >
            <div className="duration-300 cursor-pointer w-full">{label}</div>
            <BiChevronLeft className={`${isOpen ? "-rotate-90" : ""} duration-300 text-3xl`} />
          </div>
          <div className={` ${isOpen ? "px-2 py-4 h-full" : "opacity-0 h-0! overflow-hidden invisible p-0"} duration-300 transition-all text-sm text-slate-500`}>
            { content }
          </div>
        </div>
  )
}

export default AccordionItem