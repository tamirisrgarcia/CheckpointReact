import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

function Navbar() {

  const authContext = useContext(AuthContext);
  const navigate    = useNavigate();
  const token       = localStorage.getItem("@dhOdonto_token")

  function logout() {
    authContext.removeData();
    navigate("/login");
  }

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  },[]);

  return (
    <header className = "sticky-top">
      {/* TODO DARK MODE:
          * Na linha seguinte deverá ser feito um teste se a aplicação
            está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className   = {`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label  = "Third navbar example"
      >
        <div className = "container">
          <Link to = "/home">
            <div className = {`navbar-brand ${styles.navbarBrand}`}>DH Odonto</div>
          </Link>
          
          <button
            className       = "navbar-toggler"
            type            = "button"
            data-bs-toggle  = "collapse"
            data-bs-target  = "#navbarsExample03"
            aria-controls   = "navbarsExample03"
            aria-expanded   = "false"
            aria-label      = "Toggle navigation"
          >
            <span className = "navbar-toggler-icon"></span>
          </button>

          <div
            className = "collapse navbar-collapse justify-content-end"
            id        = "navbarsExample03"
          >
            <ul className = "navbar-nav mb-2 mb-sm-0">

              <li className = {`nav-item ${styles.navBarLink}`}>
                <Link to = "/home">
                  <div className = "nav-link">Home</div>
                </Link>
              </li>

              <li className = {`nav-item ${styles.navBarLink}`}>
                {token ? 
                  <button
                    className = {`btn btn-light ${styles.button}`}
                    onClick   = {logout}>
                    Logout
                  </button> :
                  <Link to = "/login">
                    <div className = "nav-link">Login</div>
                  </Link>
                }
                {/* TODO LOGIN LOGOUT:
                  * Se o usuário estiver logado, deverá aparecer um botão de logout
                    que vai apagar o token do localstorage.
                  * Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                    ao formulário de login

                TODO DARK MODE:
                  * O botão de logout deverá ser testado darkmode
                    se sim, btn-dark, se não, btn-light */}
               
              </li>

              <li className = {`nav-item`}>
                {/* TODO DARK MODE: Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn btn-light${styles.btnStyle}`}
                >
                  ☀ 🌙{" "}
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;