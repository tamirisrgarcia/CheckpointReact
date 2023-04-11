import { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function LoginForm() {

  const navigate                    = useNavigate();
  const [username,     setUsername] = useState("");
  const [password,  setPassword]    = useState("");
    
  async function handleSubmit(e) {

    e.preventDefault();

    const { data } = await api.post(`/auth`, login);

    navigate("/home");

  }

  return (
    <>
      <div
        className = {`text-center card container ${styles.card}`}
      >
        <div className = {`card-body ${styles.CardBody}`}>
          <form onSubmit = {handleSubmit}>
            <input
              className   = {`form-control ${styles.inputSpacing}`}
              placeholder = "Login"
              name        = "login"
              onChange    = {(e) => setUsername(e.target.value)}
              required
            />
            <input
              className   = {`form-control ${styles.inputSpacing}`}
              placeholder = "Password"
              name        = "password"
              type        = "password"
              onChange    = {(e) => setPassword(e.target.value)}
              required
            />
            <button
              className   = "btn btn-primary"
              type        = "submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
