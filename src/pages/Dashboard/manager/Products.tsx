import ManagerProductsTable from "../../../components/dashboard/templates/manager/products/ManagerProductsTable"
import PageLabel from "../../../components/dashboard/ui/PageLabel"


const ManagerProducts = () => {
  return (
    <div className="space-y-10">
      <PageLabel label="Store product management" />
      <ManagerProductsTable />
    </div>
  )
}

export default ManagerProducts