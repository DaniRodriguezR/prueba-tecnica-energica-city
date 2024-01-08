import { useFetch } from "./useFetch";
import React from "react";
import logo from "./img/logo.png";
import "./App.css";

function App() {
  const { data, loading } = useFetch(
    "https://auto-cl-default-rtdb.firebaseio.com/V1/vehicles/new/search/data.json"
  );

  return (
    <div class="App">
      <header class="text-center">
        <img class="mx-auto md:py-8 md:w-26 lg:w-36" src={logo}></img>
      </header>
      <input
        type="text"
        class="md:w-auto lg:w-96"
        placeholder="Ingrese el nombre a buscar..."
      />
      <button class="md:border-solid border-4 border-x-blue-700">Buscar</button>
      <div class="card"></div>
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
    </div>
  );
}

export default App;
