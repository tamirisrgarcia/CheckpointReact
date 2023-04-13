import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import AuthProvider from "./contexts/authContext";

function App() {

  return (
    <>
      {/* TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className = {`app light}`}>
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
      </div>
    </>
  );
}

export default App;