"use client"
import SidebarItem from "./sidebarItem";
import { ImUserTie } from "react-icons/im";
import { GiBlackBook } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
/*Esta s la estructura de datos*/ 
const guestRoutes =[
    {
        icon: <LuLayoutDashboard/>,
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: <ImUserTie/>,
        name: "Maestro",
        path: "/dashboard/maestro"
    },
    {
        icon: <GiBlackBook/>,
        name: "Materia",
        path: "/dashboard"
    } 
]

export default function SidebarRoutes() {
    const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
        {routes.map((route, index) => (
            <SidebarItem
                key={index}
                icon={route.icon}
                name={route.name}
                path={route.path}
            />))}
      
        </div>
  )
}

