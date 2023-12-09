import Sidebar from "../../components/sidebar"
export default function Layout({children}) {
  return (
    
      <div className="h-full">
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <Sidebar></Sidebar>
        </div>
        {children}
        </div>
    
  )
}