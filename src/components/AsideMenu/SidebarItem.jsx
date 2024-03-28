import React, { useContext } from "react";
import { SideBarContext } from "./AsideMenu";

const SidebarItem = ({ icon, text, active, alert }) => {
  const { expanded } = useContext(SideBarContext);
  return (
    <li
      className={`relative flex items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors
  ${
    active
      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
      : "hover:bg-indigo-50 text-gray-600 "
  }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-[300px] ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
    </li>
  );
};

export default SidebarItem;
