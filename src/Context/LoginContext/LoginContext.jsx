import { createContext } from "react";

export const LoginContext = createContext(null);

const LoginContextProvider = (props) => {
  const contextValue = "Username";
  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
