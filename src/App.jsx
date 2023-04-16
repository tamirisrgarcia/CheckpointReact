import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import AuthProvider from "./contexts/authContext";
import ThemeProvider from "./contexts/themeContext";
import { ThemeContext } from "@emotion/react";
import { useContext } from "react";




function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <Navbar />
                <Routes>
                  <Route
                    path    = "/home"
                    element =  {<Home />}
                  />
                  <Route
                    path    = "/login"
                    element = {<Login />}
                  />
                  <Route
                    path    = "/dentist/:matricula"
                    element = {<Detail /> }
                  />
                </Routes>
              <Footer />
            </BrowserRouter>
          </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;