import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar () {

  return (
    <header className = "sticky-top">
     
      <nav
        className   = {`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label  = "Third navbar example"
      >
        <div className = "container">
            
            <Link to = "/" className = {`navbar-brand ${styles.navbarBrand}`}>DH Odonto</Link>
          
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

{}
          <div
            className = "collapse navbar-collapse justify-content-end"
            id        = "navbarsExample03"
          >
            <ul className = "navbar-nav mb-2 mb-sm-0">

              <li className = {`nav-item ${styles.navBarLink}`}>
                <Link to = "/"      className = "nav-link">Home</Link>
              </li>

              <li className = {`nav-item ${styles.navBarLink}`}>
                <Link to = "/auth"  className = "nav-link">Login</Link>
              </li>

              <li className = {`nav-item`}>
                <button
                  className = {`btn btn-light${styles.btnStyle}`}
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
