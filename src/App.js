import { useFetch } from "./useFetch";
import React from "react";
import logo from "./img/logo.png";
import "./App.css";
import SearchComponent from "./components/SearchComponent";
import VehicleList from "./components/VehicleList";

function App() {
  const { data, loading } = useFetch(
    "https://auto-cl-default-rtdb.firebaseio.com/V1/vehicles/new/search/data.json"
  );

  return (
    <div className="App">
      <header className="text-center">
        <img
          className="mx-auto md:py-8 md:w-26 lg:w-36"
          src={logo}
          alt="Logo"
        />
      </header>
      <SearchComponent />
      <button className="md:border-solid border-4 border-x-blue-700">
        Buscar
      </button>
      <VehicleList data={data} loading={loading} />
    </div>
  );
}

export default App;
