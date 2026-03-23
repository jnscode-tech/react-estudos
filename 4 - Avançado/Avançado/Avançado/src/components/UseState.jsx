import { useState } from "react";

const UseState = () => {

  let nome = "Juliana";
  const [name, setName] = useState("Juliana Santos");

  return (
    <div>
      <h2>Gerenciando Dados com useState</h2>

      <button onClick={() => (nome = "Aline")}>
        Forma errada
      </button>
      <p>Nome: {nome}</p>

      <button onClick={() => setName("Aline")}>
        Forma correta
      </button>
      <p>Nome: {name}</p>
    </div>
  );
};

export default UseState;