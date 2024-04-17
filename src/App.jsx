import React from "react";
import { useState } from "react";
import Form from "./components/Form";


function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat");
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);
  const setPlacesDisponibles = (updatedPlaces) => {
    console.log(updatedPlaces);
    tipusEstudiant === "no-graduat"
      ? setNGPlaces(updatedPlaces)
      : setGPlaces(updatedPlaces);
  };

  return (
    <div className="items-center">
      <div className="tipusEstudiant">
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles No Graduats: {ngPlaces}
        </label>
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles Graduats: {gPlaces}
        </label>
        <label className="text-center mx-2 block">Selecciona Tipus d'Estudiant:
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
        </label>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === "no-graduat" ? ngPlaces : gPlaces}
      />
    </div>
  );
}

export default App;
