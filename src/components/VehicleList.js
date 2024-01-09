import React from "react";

function VehicleList({ data, loading }) {
  return (
    <div class="flex flex-wrap justify-center">
      {loading && <li>Cargando API...</li>}
      {data?.map((vehicles, index) => (
        <React.Fragment key={vehicles.brand}>
          <div class="flex flex-col items-center justify-center mx-4 my-8">
            <div class="flex justify-center">
              <img class="md:py-8 md:w-32 lg:w-48" src={vehicles.image} />
            </div>
            <div class="md:py-1 md:w-32 lg:w-48 text-left">
              <h1>{vehicles.brand}</h1>
              <p>{vehicles.model}</p>
            </div>
          </div>
          {/* cambiamos el valor del index a 1 y despues comprobamos si el índice es
               divisible por 3 sin dejar un resto, (3/1 == 0,33)*/}
          {/* Después renderiza un div con el with al 100% que empuja a los otros objetos a la siguiente fila*/}
          {(index + 1) % 3 === 0 && <div class="w-full"></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default VehicleList;
