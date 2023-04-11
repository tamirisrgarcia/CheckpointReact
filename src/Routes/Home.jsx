import { useEffect } from "react";
import Card from "../components/card";
//import api  from "../services/api";

function Home() {

  //const [dentista, setDentista] = useState([]);

  async function getDentistas() {
    try {
      //const response = await api.get("/dentista", 
      //{headers: {
        //Authorization: localStorage.getItem("")
  
    } catch (error) {
      alert("erro");
    }
  }

  useEffect(() => {
    getDentistas();    
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        <Card />
      </div>
    </>
  );
};

export default Home;
