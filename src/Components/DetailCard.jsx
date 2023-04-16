import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../services/api";
import { ThemeContext } from "../contexts/themeContext";

function DetailCard() {
  const { theme }     = useContext(ThemeContext);
  const { matricula } = useParams();
  const [dentista,  setDentista]  = useState([]);
  const [username,  setUsername] = useState("");

  setTimeout(() => {
    setUsername(dentista.usuario.username);
  }, 5);

  async function getDentista() {
    try {
      const { data } = await api.get(`/dentista?matricula=${matricula}`);
      setDentista(data);

    } catch (error) {
      alert("Erro ao retornar dados");
    }
  }
  useEffect(() => {
    getDentista();
  }, []);


  return (
    <>
      <h1>Detalhes sobre {dentista.nome} </h1>
          
      <section className = "card col-sm-12 col-lg-6 container">
        <div className  = {`card-body row ${theme}`}>

          <div className  = "col-sm-12 col-lg-6">
            <img
              className = "card-img-top"
              src       = "/images/doctor.jpg"
              alt       = "doctor placeholder"
            />
          </div>

          <div className  = "col-sm-12 col-lg-6">

            <ul className = "list-group">
              <li className = "list-group-item">Nome: {dentista.nome}</li>
              <li className = "list-group-item">Sobrenome: {dentista.sobrenome}</li>
              <li className = "list-group-item">Usuário: {username}</li>
            </ul>

            <div className = "text-center">
              <button
                data-bs-toggle  = "modal"
                data-bs-target  = "#exampleModal"
                className       = {
                  theme === "light"
                  ? `btn btn-light  ${styles.button}`
                  : `btn btn-dark   ${styles.button}`
                } data-testeid = "detailCardButton">
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />  
    </>
  );
};

export default DetailCard;
