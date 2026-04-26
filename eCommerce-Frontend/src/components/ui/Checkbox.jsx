import clsx from "clsx";
import { Check } from "lucide-react";

const Checkbox = ({ checked, setChecked, label }) => {
  return (
    <label
        htmlFor="checkbox"
        className="flex items-center gap-2 font-medium cursor-pointer"
      >
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="absolute opacity-0 w-5 h-5 cursor-pointer"
        />
        <div
          className={clsx(
            "h-4 w-4 rounded-sm flex-none grid place-items-center",
            checked ? "bg-primary" : "ring ring-border",
          )}
        >
          {checked && (
            <Check strokeWidth={3} size={14} className="text-surface-muted" />
          )}
        </div>
        <span>{label}</span>
      </label>
  )
}

export default Checkbox