
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer       from "./components/footer";
import Navbar       from "./components/navbar";
import AuthProvider from "./contexts/authContext";
import Home         from "./Routes/Home";
import Login        from "./Routes/Login"
import Detail       from "./Routes/Detail"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/"             element = {<Home />}    />
          <Route path = "/auth"         element = {<Login />}   />
          <Route path = "/dentista/:id" element = {<Detail />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
