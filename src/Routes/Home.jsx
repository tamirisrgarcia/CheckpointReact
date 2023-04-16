import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { AuthContext } from "../contexts/authContext";
import api from "../services/api";

function Home() {

  const [dentistas, setDentistas] = useState([]);
  const { token } = useContext(AuthContext);

  async function getDentistas() {
    try {
      const { data } = await api.get("/dentista", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      <h1>Home</h1>
      <div className = "card-grid container">
        {dentistas.map((dentista) => {
          return <Card dentista = {dentista} key = {dentista.matricula} />
        })}
      </div>
    </>
  );
}

export default Home;
