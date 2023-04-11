import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React    from "react";
import ReactDOM from "react-dom/client";
import Navbar   from "./Components/Navbar";
import Footer   from "./Components/Footer";
import Home     from "./Routes/Home";
import Login    from "./Routes/Login";
import Detail   from "./Routes/Detail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { path: "/home",                element: <Home />,   },
  { path: "/login",               element: <Login />,  },
  { path: "/dentist/:matricula",  element: <Detail />, },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router = {router} />
    <Footer />
  </React.StrictMode>
);

//TODO COLOCAR CONTEXT AQUI