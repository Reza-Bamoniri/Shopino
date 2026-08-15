import { BiChevronLeft } from "react-icons/bi"
import type { aboutUsDataType } from "../../../types/aboutUsDataType"


const AccordionItem = ({ label, content }: aboutUsDataType) => {
  return (
    <div>
          <div
            className={`flex-between select-none h-12 text-sm px-4 flex-ic duration-300 hover:bg-slate-50 active:*:scale-95 min-h-20 group cursor-pointer`}
            tabIndex={1}
          >
            <div className="duration-300 cursor-pointer w-full">{label}</div>
            <BiChevronLeft />
          </div>
          <div className={`duration-300 transition-all text-sm  text-slate-500`}>
            {content}
          </div>
        </div>
  )
}

export default AccordionItem