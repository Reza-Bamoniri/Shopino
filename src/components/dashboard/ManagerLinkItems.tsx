import { ManagerLinksData } from "../../data/ManagerLinksData"
import NavItem from "../common/sidebar/fragments/NavItem"


const ManagerLinkItems = () => {
  return (
    <>

    {
      ManagerLinksData.map((item) => <NavItem key={item.id} {...item} />)
    }

         

    </>
  )
}

export default ManagerLinkItems