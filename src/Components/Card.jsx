import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/themeContext"
import { useContext } from "react";

function Card({ dentista }) {
  const { theme } = useContext(ThemeContext)


  return (
    <>    
      <Link to = {`/dentist/${dentista.matricula}`}>

        <div className  = {`card ${theme}`}>
          <img
            className = "card-img-top"
            src       = "/images/doctor.jpg"
            alt       = "doctor placeholder"
          />
          <div className = {`card-body ${styles.CardBody}`}>
            <h5 className = {`card-title ${styles.title}`}>{dentista.nome}</h5>
            <p>{dentista.usuario.username}</p>
          </div>
        </div>
      </Link>
    </>
  )
};

export default Card;
