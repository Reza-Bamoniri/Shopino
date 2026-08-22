import { useState } from "react";
import { BiPlus } from "react-icons/bi"

import Table from "../../../common/Table/Table";
import TableHead from "../../../common/Table/TableHead";
import TableBody from "../../../common/Table/TableBody";
import TableRow from "../../../common/Table/TableRow";
import TableCell from "../../../common/Table/TableCell";
import TableToolbar from "../../../common/Table/TableToolbar";
import ProductDrawer from "../../../common/ProductDrawer/ProductDrawer";


const ManagerProductsTable = () => {

     const [isDrawerShow, setIsDrawerShow] = useState(false);
      const toggleDrawer = () => setIsDrawerShow((prev) => !prev);

  return (
    <>
          <Table>
            <TableToolbar useFlexBetween>
              <div>
                <h2 className="font-black text-lg text-yellow-600">All products</h2>
              </div>
    
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleDrawer}
                  className="px-3 hover:opacity-90 flex items-center h-10 rounded-md bg-yellow-600 text-white"
                >
                  <BiPlus />
                  <span>New Product</span>
                </button>
              </div>
            </TableToolbar>
    
            <TableHead>
              <TableRow className="">
                <TableCell>ID</TableCell>
                <TableCell>title</TableCell>
                <TableCell>price</TableCell>
                <TableCell>state</TableCell>
              </TableRow>
            </TableHead>
    
            <TableBody className="text-zinc-600 *:h-16! font-medium text-xs!">
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>laptop</TableCell>
                <TableCell>{1200} $</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
    
          <ProductDrawer isOpen={isDrawerShow} toggleDrawer={toggleDrawer} />
        </>
  )
}

export default ManagerProductsTable