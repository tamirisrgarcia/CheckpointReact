import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  function saveUserData(user_name, token) {
    localStorage.setItem("@dhOdonto_user_name", user_name);
    localStorage.setItem("@dhOdonto_token",     token);
  }

  function removeUserData() {
    localStorage.removeItem("@dhOdonto_user_name");
    localStorage.removeItem("@dhOdonto_token");
  }

  return (
    <AuthContext.Provider value = {{ saveUserData, removeUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;