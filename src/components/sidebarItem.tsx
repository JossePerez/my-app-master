"use client"
import {useRouter, usePathname} from "next/navigation";
import { ImUserTie } from "react-icons/im";
import { GiBlackBook } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import {cn} from "@/libs/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

export default function sidebarItem({icon, text, link}: SidebarItemProps) {

  const pathname = usePathname();
  const router = useRouter();
  
  const isActive = (pathname === "/" && link === "/") || (pathname === link)|| (pathname?.startsWith(`${link}/`) )

  const onClick = () => {
    router.push(link);
  }

  return (
    <button
    onClick={onClick}
    type="button"
    className={cn("flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-100",isActive && "text-sky-700")}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
      </div>
    </button>
  )
}
