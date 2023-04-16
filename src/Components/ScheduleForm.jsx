import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/themeContext";

function ScheduleForm() {

  const navigate  = useNavigate();
  const { token } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [dentistas,         setDentistas]         = useState([]);
  const [pacientes,         setPacientes]         = useState([]);
  const [matriculaDentista, setMatriculaDentista] = useState('');
  const [matriculaPaciente, setMatriculaPaciente] = useState('');
  const [horario,           setHorario]           = useState('');


  async function getDentistas(){
    try {
      const { data } = await api.get("/dentista", {
        headers: {
            Authorization: `Bearer ${token}`,
      }});
      setDentistas(data);

    } catch (error) {
      alert("Erro ao retornar lista de dentistas"); 
    }
  }

  async function getPacientes(){
    try {
      const { data } = await api.get("/paciente", {
        headers: {
            Authorization: `Bearer ${token}`
          }});
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

    const data = {
      paciente: {
        matricula: matriculaPaciente,
      },
      dentista: {
        matricula: matriculaDentista,
      },
      dataHoraAgendamento:  horario,
    };

    try {
      await api.post("/consulta", data,
      {headers: {
          Authorization: `Bearer ${token}`
      }});

      alert("Consulta agendada.");
      
      navigate("/home");
      
    } catch (error) {
      alert("Ocorreu um erro, tente novamente.");
    }
  };

  return (
    <>
      <div className  = {
        theme === "light"
        ? `text-center container`
        : `text-center container dark`
      }>
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
                onChange  = {(e) => setMatriculaDentista(e.target.value)}
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
                required
              />
            </div>
          </div>
          <div className = {`row ${styles.rowSpacing}`}>
            <button
              className = {
                theme === "light"
                ? `btn btn-light  ${styles.button}`
                : `btn btn-dark   ${styles.button}`
              }
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
