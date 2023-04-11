import React    from "react";
import ReactDOM from "react-dom/client";
import Navbar   from "./components/navbar";
import Home     from "./Routes/Home";
import Footer   from "./components/footer";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
      <Navbar />
      <Home />
      <Footer />
  </React.StrictMode>
);
