import React from "react";
import Product from "./components/UseContextHook/Product";
import LoginContextProvider from "./Context/LoginContext/LoginContext";
import ClassDemo from "./components/ClassComponents/ClassDemo";

const App = () => {
  return (
    <div>
      <LoginContextProvider>
        <Product />
        <ClassDemo name="Valentine"/>
      </LoginContextProvider>
    </div>
  );
};

export default App;
