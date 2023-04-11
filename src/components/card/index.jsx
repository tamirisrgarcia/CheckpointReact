import styles from "./styles.module.css";

function Card(dentista) {

  return (
    <>
      <div className={`card`}>
        <img src = "/images/doctor.jpg" alt = "doctor placeholder" className="card-img-top"/>
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/MatriculaDoDentista`}>
            <h5 className={`card-title ${styles.title}`}>Nome e Sobrenome do dentista</h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
