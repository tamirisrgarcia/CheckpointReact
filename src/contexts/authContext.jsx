import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState("") ;

  function saveUserData(token) {
    localStorage.setItem("@dh_token", token);
    setToken(token);
  }

  function removeUserData() {
    localStorage.removeItem("@dh_token");
    setToken("");
  }

  useEffect(() => {
    const response = localStorage.getItem("@dh_token");
    setToken(response);
  }, []);

  return (
    <AuthContext.Provider value = {{ token, saveUserData, removeUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;