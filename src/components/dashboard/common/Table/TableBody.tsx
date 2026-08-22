import clsx from "clsx";
import type { tablesProps } from "./types/tablePropType";


const TableBody = ({ children, className }: tablesProps) => {
  return (
    <div
      className={clsx(
        "py-0! divide-y divide-zinc-200 overflow-visible",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TableBody;
