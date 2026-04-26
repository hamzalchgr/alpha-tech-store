import clsx from "clsx";
import { HouseWifi, Minus, Plus } from "lucide-react";

const Accordion = ({ openAcc, toggleAcc, accLabel, children }) => {
  return (
    <div
      className="flex flex-col gap-0"
    >
      <button
        onClick={toggleAcc}
        className="font-bold w-full flex items-center justify-between text-sm py-1 leading-5"
      >
        <span>{accLabel}</span>
        {openAcc === accLabel ? <Minus size={14} /> : <Plus size={14} />}
      </button>
      <div className={clsx(
        "text-xs flex flex-col gap-2 items-start pr-10 overflow-hidden transition-all duration-300",
        openAcc !== accLabel ? "h-0 py-0" : "h-auto py-3",
      )}>{children}</div>
      
    </div>
  );
};

export default Accordion;
