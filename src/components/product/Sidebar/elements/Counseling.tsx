import { BiPhoneCall } from "react-icons/bi";

const Counseling = () => {
  return (
    <div className="flex-between text-slate-500">
      <div className="space-y-1">
        <p className="text-xs">For product purchase consultation, call:</p>
        <p dir="ltr" className="text-xs text-start">
          {"021-98..."}
        </p>
      </div>

      <BiPhoneCall className="text-3xl text-slate-500" />
    </div>
  );
};

export default Counseling;
