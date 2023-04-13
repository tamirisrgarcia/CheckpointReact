import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";
import api from "../services/api";

function LoginForm() {

  const navigate = useNavigate();
  const [username,  setUsername]  = useState("");
  const [password,  setPassword]  = useState("");
  
  async function handleSubmit(e) {

    e.preventDefault();

    try {
      const { data } = await api.post("/auth", { username, password });
      //localStorage.setItem("@dhOdonto_user_name");
      //localStorage.setItem("dhOdonto_token")
      navigate("/home");
      
    } catch (error) {
      alert("Verifique suas informações novamente");
    }
        //TODO API:
          //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
          //no localstorage para ser usado em chamadas futuras
  };

  //TODO VALIDAÇÕES:
      // e espera que a página de login, contenha os fluxos de validação necessários (mínimo 2 validações)
      // para um submit correto do formulário.

  return (
    <>
      {/* TODO DARK MODE:
          Na linha seguinte deverá ser feito um teste se a aplicação
          está em dark mode e deverá utilizar o css correto */}
      <div
        className = {`text-center card container ${styles.card}`}
      >
        <div className = {`card-body ${styles.CardBody}`}>
          <form onSubmit = {handleSubmit}>
            <input
              className   = {`form-control ${styles.inputSpacing}`}
              placeholder = "Login"
              name        = "login"
              value       = {username}
              onChange    = {(e) => setUsername(e.target.value)}
              required
            />
            <input
              className   = {`form-control ${styles.inputSpacing}`}
              placeholder = "Senha"
              name        = "password"
              type        = "password"
              value       = {password}
              onChange    = {(e) => setPassword(e.target.value)}
              required
            />
            <button
              className   = "btn btn-primary"
              type        = "submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
