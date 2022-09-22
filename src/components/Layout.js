import React, { createContext, useState } from "react";
import Header from "./Header";
export const AuthContext = createContext();
const Layout = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={[auth, setAuth]}>
        <Header />
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default Layout;
