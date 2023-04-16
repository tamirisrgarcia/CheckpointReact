import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useContext, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/themeContext";

function LoginForm() {

  const navigate = useNavigate();

  const [username,  setUsername]  = useState("");
  const [password,  setPassword]  = useState("");

  const { theme }         = useContext(ThemeContext)
  const { saveUserData }  = useContext(AuthContext);
  

  async function handleSubmit(e) {

    e.preventDefault();

    if(username === "" || password === "") {
      return alert("Todos os campos devem ser preenchidos");
    }

    try {

      const {data} = await api.post("/auth", { username, password });
      saveUserData(data.token);
      navigate("/home");
      alert("Logado");
      
    } catch (error) {
      alert("Verifique suas informações novamente");
    }
  };

  return (
    <>
      <div
        className = {
          theme === "light"
          ? `text-center card container ${styles.card}`
          : `text-center card dark container ${styles.card}`
        }
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
