import { BiDollar, BiHome } from "react-icons/bi";
import { BsBox2, BsShop } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";

export const ManagerLinksData = [
    {
      id:1,
      bgColor: "bg-zinc-500",
      iconColor: "text-zinc-500",
      Icon: BiHome ,
      href: "/dashboard/manager/home",
      label: "Home",
    },
    {
      id:2,
      bgColor: "bg-yellow-500",
      iconColor: "text-yellow-500",
      Icon: BsBox2 ,
      href: "/dashboard/manager/products",
      label: "Products",
    },
    {
      id:3,
      bgColor: "bg-orange-500",
      iconColor: "text-orange-500",
      Icon: FaTruckArrowRight ,
      href: "/dashboard/manager/orders",
      label: "Orders",
    },
    {
      id:4,
      bgColor: "bg-blue-500",
      iconColor: "text-blue-500",
      Icon: FaUser ,
      href: "/dashboard/manager/users",
      label: "Users",
    },
    {
      id:5,
      bgColor: "bg-green-500",
      iconColor: "text-green-500",
      Icon: BsShop ,
      href: "/dashboard/manager/sellers",
      label: "Sellers",
    },
    {
      id:6,
      bgColor: "bg-red-500",
      iconColor: "text-red-500",
      Icon: BiDollar ,
      href: "/dashboard/manager/discounts",
      label: "Discounts",
    },
]


  


