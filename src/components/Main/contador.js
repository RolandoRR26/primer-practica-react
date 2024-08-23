import React, { useState } from 'react';

function Contador() {
  
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };
  
  return (
    <div>
    <h2>Este es un contador desde un componente: {contador}</h2>
    <button type="button" onClick={incrementarContador}>INCREMENTAR</button>
    <button type="button" onClick={decrementarContador}>DECREMENTAR</button>
    </div>
  );
}

export default Contador;