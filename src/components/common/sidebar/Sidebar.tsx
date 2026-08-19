import Logout from "../../dashboard/Logout"
import ManagerLinkItems from "../../dashboard/ManagerLinkItems"


const Sidebar = () => {
  return (
    <aside className="w-70 bg-white shadow-xl flex flex-col justify-between h-dvh! sticky top-0! right-0 border-l border-zinc-200">
      <div>
        <main className="p-3 space-y-1.5">
          <ManagerLinkItems/>
        </main>
      </div>
      <Logout />
    </aside>
  )
}

export default Sidebar