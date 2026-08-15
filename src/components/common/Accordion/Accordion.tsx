import type { aboutUsDataType } from "../../../types/aboutUsDataType"
import AccordionItem from "./AccordionItem"

type AccordionPropsType = {
    options: aboutUsDataType[] 
}

const Accordion = ({options}: AccordionPropsType) => {
  return (
    <div className="border rounded-lg  divide-y divide-slate-300 border-slate-300 overflow-hidden w-full mx-auto" >
       {
        options.map((opt) => <AccordionItem key={opt.id} {...opt} />)
       }
    </div>
  )
}

export default Accordion