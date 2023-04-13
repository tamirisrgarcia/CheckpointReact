import { useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function ScheduleForm() {

  const navigate = useNavigate();

  const [dentistas,         setDentistas]         = useState([]);
  const [pacientes,         setPacientes]         = useState([]);
  const [matriculaDentista, setMatriculaDentista] = useState('');
  const [matriculaPaciente, setMatriculaPaciente] = useState('');
  const [horario,           setHorario]           = useState('');


  async function getDentistas(){
    try {
      const { data } = await api.get("/dentista");
      setDentistas(data);

    } catch (error) {
      alert("Erro ao retornar lista de dentistas"); 
    }
  }

  async function getPacientes(){
    try {
      const { data } = await api.get("/paciente");
      setPacientes(data.body);

    } catch (error) {
      alert("Erro ao retornar lista de pacientes"); 
    }
  }

  useEffect(() => {
    getDentistas();
    getPacientes();
  }, []);
  
  
  async function handleSubmit(e) {

    e.preventDefault();

    try {
      await
        api.post("/consulta",
        {
          dentista:     { matricula: matriculaDentista},
          paciente:     { matricula: matriculaPaciente},
          agendamento:  horario
        },
        {
          headers:      {Authorization: `Bearer ${localStorage.getItem('@dhOdonto_token')}`},
        });

      alert("Consulta agendada.");
      
      navigate("/home");
      
    } catch (error) {
      alert("Ocorreu um erro");
    }

    //TODO API: Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className  = {`text-center container`}>
        <form onSubmit  = {handleSubmit}>
          <div className  = {`row ${styles.rowSpacing}`}>
            <div className  = "col-sm-12 col-lg-6">
              <label
                htmlFor   = "dentist"
                className = "form-label"
              >
                Dentista
              </label>
              <select
                className = "form-select"
                name      = "dentist"
                id        = "dentist"
                value     = {matriculaDentista}
                onChange  = {(e) => setMatriculaPaciente(e.target.value)}
              >
                {dentistas.map((dentista) => (
                  <option
                    key     = {dentista.matricula}
                    value   = {dentista.matricula}>
                    {dentista.nome} {dentista.sobrenome}
                  </option>
                ))}
              </select>
            </div>

            <div className  = "col-sm-12 col-lg-6">
              <label
                htmlFor   = "patient"
                className = "form-label">
                Paciente
              </label>
              <select
                className = "form-select"
                name      = "patient"
                id        = "patient"
                value     = {matriculaPaciente}
                onChange  = {(e) => setMatriculaPaciente(e.target.value)}
              >
                {pacientes.map((paciente) => (
                  <option
                    key     = {paciente.matricula}
                    value   = {paciente.matricula}>
                    {paciente.nome} {paciente.sobrenome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className  = {`row ${styles.rowSpacing}`}>
            <div className  = "col-12">
              <label
                htmlFor   = "appointmentDate"
                className = "form-label">
                Data
              </label>
              <input
                className = "form-control"
                id        = "appointmentDate"
                name      = "appointmentDate"
                type      = "datetime-local"
                value     = {horario}
                onChange  = {(e) => setHorario(e.target.value)}
              />
            </div>
          </div>
          <div className = {`row ${styles.rowSpacing}`}>
            {/* TODO DARK MODE: Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className = {`btn btn-light ${styles.button}`}
              type      = "submit"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
