import React from "react";
import Product from "./components/UseContextHook/Product";
import LoginContextProvider from "./Context/LoginContext/LoginContext";
import ClassDemo from "./components/ClassComponents/ClassDemo";
import ReactForm from "./components/ReactFormHandling/ReactForm";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import SidebarItem from "./components/AsideMenu/SidebarItem";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  Home,
  StickyNote,
  Calendar,
  Layers,
  Flag,
} from "lucide-react";
import SidebarLinkItem from "./components/Sidebar/SidebarLinkItem";

const App = () => {
  return (
    // <div>
    //   {/* <LoginContextProvider>
    //     <Product />
    //     <ClassDemo name="Valentine"/>
    //   </LoginContextProvider> */}
    //   {/* <ReactForm/> */}
    //   <AsideMenu>
    //   <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active={true} />
    //   <SidebarItem icon={<UserCircle size={20} />} text="Users"  />
    //   <SidebarItem icon={<Boxes size={20} />} text="Inventory"  />
    //   <SidebarItem icon={<Package size={20} />} text="Orders"  />
    //   <SidebarItem icon={<Receipt size={20} />} text="Billings"  />
    //   <hr className="my-3" />
    //   <SidebarItem icon={<Settings size={20} />} text="Settings"  />
    //   <SidebarItem icon={<LifeBuoy size={20} />} text="Help"  />
    // </AsideMenu>
    // </div>
    <div className="flex">
      <Sidebar>
        <SidebarLinkItem icon={<Home size={20} />} text="Home" alert />
        <SidebarLinkItem icon={<LayoutDashboard size={20} />}text="Dashboard" active />
        <SidebarLinkItem icon={<StickyNote size={20} />} text="Project" alert/>
        <SidebarLinkItem icon={<Calendar size={20} />} text="Calendar" />
        <SidebarLinkItem icon={<Layers size={20} />} text="Tasks" />
        <SidebarLinkItem icon={<Flag size={20} />} text="Reporting" />
        <hr className="my-3" />
        <SidebarLinkItem icon={<Settings size={20} />} text="Settings" />
        <SidebarLinkItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </div>
  );
};

export default App;
