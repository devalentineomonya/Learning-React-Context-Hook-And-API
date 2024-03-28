import React from "react";
import Product from "./components/UseContextHook/Product";
import LoginContextProvider from "./Context/LoginContext/LoginContext";
import ClassDemo from "./components/ClassComponents/ClassDemo";
import ReactForm from "./components/ReactFormHandling/ReactForm";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import SidebarItem from "./components/AsideMenu/SidebarItem";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";


const App = () => {
  return (
    <div>
      {/* <LoginContextProvider>
        <Product />
        <ClassDemo name="Valentine"/>
      </LoginContextProvider> */}
      {/* <ReactForm/> */}
      <AsideMenu>
      <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active={true} />
      <SidebarItem icon={<UserCircle size={20} />} text="Users"  />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory"  />
      <SidebarItem icon={<Package size={20} />} text="Orders"  />
      <SidebarItem icon={<Receipt size={20} />} text="Billings"  />
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings"  />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help"  />
    </AsideMenu>
    </div>
  );
};

export default App;
