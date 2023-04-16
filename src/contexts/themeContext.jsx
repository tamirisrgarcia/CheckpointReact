import { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {

    const [chosenTheme, setTheme] = useState("light");

    function handleTheme() {
        if (chosenTheme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
          localStorage.setItem("@theme", chosenTheme);
        }
      
        const theme = localStorage.getItem("@theme");

    return (
        <ThemeContext.Provider value = {{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;