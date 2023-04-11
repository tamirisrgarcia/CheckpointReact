import styles from "./Footer.module.css";

function Footer() {

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <div className = {styles.footerWrapper}>

        <button
          className = {`btn btn-danger ${styles.top}`}
          onClick = {scrollToTop}
        >
          Voltar para o topo
        </button>

        {/* TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
         está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div className = {`navbar-light bg-light} ${styles.footer}`}>
          <div className = "container">
            <div className = {`row`}>
              <div className = "col-sm-12 col-lg-6">
                {/* TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o css correto */}
                <img
                  src       = "/images/DH.png" 
                  alt       = 'DH-logo'
                  className = {`${styles.dhLogo}`}
                />
              </div>
              <div className = {`col-sm-12 col-lg-6 ${styles.icons}`}>
                <img
                  src       = "/images/ico-facebook.png"
                  alt       = "ícone do facebook"
                  className = {styles.icon}
                />
                <img
                  src       = "/images/ico-instagram.png"
                  alt       = "ícone do instagram"
                  className = {styles.icon}
                />
                <img
                  src       = "/images/ico-whatsapp.png"
                  alt       = "ícone do whatsapp"
                  className = {styles.icon}
                />
                <img
                  src       = "/images/ico-tiktok.png"
                  alt       = "ícone do tiktok"
                  className = {styles.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;