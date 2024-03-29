import React, { createContext, useState } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
export const sidebarContext = createContext(null);

function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col border-r bg-white shadow-sm">
        <div className="p-4 pd-2 flex justify-between items-center">
          <img
            src={logo}
            alt=""
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <sidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </sidebarContext.Provider>
        <div className="border-t flex p-3">
          <img className="w-10 h-10 rounded-md" src={profile} alt="" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4 overflow-hidden whitespace-nowrap text-ellipsis ">
              <h4 className="font-semibold">Devalentine</h4>
              <span className="text-xs text-gray-600 ">
                devalentineonya@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
