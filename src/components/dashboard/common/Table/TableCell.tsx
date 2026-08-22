import clsx from "clsx";
import type { tablesProps } from "./types/tablePropType";

const TableCell = ({ children, className }: tablesProps) => {
  return (
    <div className={clsx("flex-1 px-3 shrink text-sm text-start", className)}>
      {children}
    </div>
  );
};

export default TableCell;
