import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DetailCard() {

  const { matricula } = useParams();
  const [dentista,  setDentista]  = useState([]);

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
         {/* //TODO DARK MODE Na linha seguinte deverá ser feito um teste se a aplicação
          // está em dark mode e deverá utilizar o css correto */}
        <div className  = {`card-body row`}>

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
              <li className = "list-group-item">Usuário: {}</li>
            </ul>

            <div className = "text-center">
                  
                  
                  {/* //TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
                    // está em dark mode e deverá utilizado o css correto */}

              <button
                data-bs-toggle  = "modal"
                data-bs-target  = "#exampleModal"
                className       = {`btn btn-light ${styles.button}`}
              >
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
