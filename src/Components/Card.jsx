import { useEffect, useState } from "react";
import api from "../services/api";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card() {

  const [dentistas, setDentistas] = useState([]);

  async function getDentistas() {
    try {
      const { data } = await api.get("/dentista");
      setDentistas(data);

    } catch (error) {
      alert("Erro ao retornar dados"); 
    }
  }

  useEffect(() => {
    getDentistas()
  }, []);

  return (
    <>
      {/* TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
         está em dark mode e deverá utilizar o css correto */}
      
      {dentistas.map((dentista) => (
        <li key = {dentista.matricula}>
          
          <Link to = {`/dentist/${dentista.matricula}`}>

            <div className  = {`card`}>
              <img
                className = "card-img-top"
                src       = "/images/doctor.jpg"
                alt       = "doctor placeholder"
              />
              <div className = {`card-body ${styles.CardBody}`}>
                <h5 className ={`card-title ${styles.title}`}>
                  {dentista.nome}
                </h5>
                <p>{dentista.usuario.username}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  )
};

export default Card;
