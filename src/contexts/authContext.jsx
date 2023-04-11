import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

   
    /*seEffect(() => {
        const response = localStorage.getItem();
        //setName(response);
    }, []);
    */

    function saveToken(token) {
        localStorage.setItem("@token", token); 
    }
    function removeUserStorage() {
        //localStorage.removeItem("@token");
    }

    return (
        <AuthContext.Provider
            value = {{ removeUserStorage, saveToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;