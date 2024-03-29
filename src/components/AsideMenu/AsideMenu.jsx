import React, { useState } from "react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext } from "react";
export const SideBarContext = createContext(null);
const AsideMenu = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen ${expanded ? "w-[300px]" : "w-[80px]"}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            alt=""
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex flex-1 flex-col px-3">{children}</ul>
        </SideBarContext.Provider>
        <div className="border-t flex p-3">
          <img
            className="w-10 h-10 rounded-md"
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
          />
          <div
            className={`flex justify-between items-center w-[300px] ml-3 overflow-hidden transition-all ${
              expanded ? "w-[300px] ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default AsideMenu;
