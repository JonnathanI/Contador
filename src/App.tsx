import React, { useState } from 'react';

const ContadorProduccion: React.FC = () => {
  // Estado para almacenar la producción
  const [produccion, setProduccion] = useState<number>(0);
  // Estado para almacenar la ganancia
  const [ganancia, setGanancia] = useState<number>(0);

  // Función para aumentar la producción y calcular la ganancia
  const aumentarProduccion = () => {
    // Aumentamos la producción en 1
    setProduccion(produccion + 1);
    // Calculamos la ganancia (por ejemplo, asumiendo $1 de ganancia por cada unidad producida)
    setGanancia(produccion + 1);
  };

  return (
    <div>
      <h2>Producción: {produccion}</h2>
      <h2>Ganancia: ${ganancia}</h2>
      <button onClick={aumentarProduccion}>Aumentar Producción</button>
    </div>
  );
};

export default ContadorProduccion;
