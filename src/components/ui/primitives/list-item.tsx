"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react"

export const ListItem = ({ children, state, type, icon }: { children?: React.ReactNode, state?: string, type?: 'default' | 'section title', icon?: React.ReactNode }) => {

  return <div className={cn("menu-item flex items-center bg-white justify-between py-2 px-3 text-slate-700", { "hover:bg-slate-200 hover:text-black cursor-pointer": state !== 'disabled' })}>
    <div className={cn("flex-1 flex items-center justify-start gap-2", { "opacity-50 hover:bg-white": state === 'disabled' })}>
      {icon && type !== 'section title' && <div className="w-4 h-4 menu-icon">
        {icon}
      </div>}
      {type === 'section title' && <div className="w-4 h-4 menu-icon"></div>}
      <div className="flex-1">
        {children}
      </div>
    </div>
    {type !== 'section title' && <ChevronRight className="w-4 h-4" />}
  </div>
}
