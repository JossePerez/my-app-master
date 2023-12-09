import Logo from './logo'
import SidebarRoutes from './sidebarRoutes'
export default function Sidebar(){
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm bg-white">
            <div className="p-6">
                <a href="">
                    <Logo></Logo>
                </a>
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes/>
                <div className="bg-[#8f5e43ff] h-10 "></div>
                <div className="bg-blue-900 h-10 "></div>
                <div className="bg-purple-500 h-10 "></div>
            </div>
        </div>
    )
}
