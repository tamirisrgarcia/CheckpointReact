import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/themeContext";

function Navbar() {

  const navigate = useNavigate();
  const { theme, handleTheme } = useContext(ThemeContext)
  const { token, removeUserData } = useContext(AuthContext);
  

  function logout() {
    removeUserData();
    navigate("/login");
  }

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  return (
    <header className = "sticky-top">
      <nav
        className     = {
          theme === "light"
          ? `navbar navbar-expand-sm navbar-light bg-light`
          : `navbar navbar-expand-sm navbar-dark bg-dark`}
        aria-label    = "Third navbar example"
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
                {token
                  ? (<button
                      className = {
                        theme === "light"
                        ? `btn btn-light  ${styles.button}`
                        : `btn btn-dark   ${styles.button}`}
                      onClick   = {() => logout()}>
                        Logout
                    </button>)
                  : <Link to = "/login">
                      <div 
                        className = "nav-link">
                          Login
                      </div>
                    </Link>
                } 
              </li>

              <li className = {`nav-item`}>
                <button
                  className = {
                    theme === "light"
                    ? `btn btn-light  ${styles.btnStyle}`
                    : `btn btn-dark   ${styles.btnStyle}`
                  }
                  onClick     = {handleTheme}
                  data-testid = "btn-theme"
                >
                  {theme === "light"
                  ? "☾"
                  : "☀︎" }{" "}
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