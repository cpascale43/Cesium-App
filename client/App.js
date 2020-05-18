import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import MaterialTable from "./components/MaterialTable";
import AddMaterialForm from "./components/AddMaterialForm";
import EditMaterialForm from "./components/EditMaterialForm";
import { numToDollar } from "../utils";

const App = () => {
  const [materials, setMaterials] = useState([]);
  const initialFormState = {
    name: "",
    type: "",
    density: "",
    costPerPound: "",
  };
  const [currentMaterial, setCurrentMaterial] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [totalCost, setTotalCost] = useState("");

  // API Call

  async function handleMaterials() {
    const { data } = await axios.get("http://localhost:3000/api");
    setMaterials(data);
  }

  // CRUD Operations

  const addMaterial = (material) => {
    setMaterials([...materials, material]);
  };

  const editRow = (material) => {
    setEditing(true);

    setCurrentMaterial({
      name: material.name,
      type: material.type,
      density: material.density,
      costPerPound: material.costPerPound,
    });
  };

  const updateMaterial = (name, updatedMaterial) => {
    setEditing(false);

    setMaterials(
      materials.map((material) =>
        material.name === name ? updatedMaterial : material
      )
    );
  };

  const deleteMaterial = (name) => {
    setMaterials(materials.filter((material) => material.name !== name));
    setEditing(false);
  };

  const handleCost = () => {
    let cost = 0;
    materials.map((material) => {
      cost += material.costPerPound * material.density;
    });
    setTotalCost(numToDollar(cost));
  };

  useEffect(() => {
    handleMaterials();
  }, []);

  return (
    <div className="app">
      <h1>Construction Materials Tracker</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit material</h2>
              <EditMaterialForm
                setEditing={setEditing}
                currentMaterial={currentMaterial}
                updateMaterial={updateMaterial}
              />
            </div>
          ) : (
            <div>
              <h2>Add material</h2>
              <AddMaterialForm addMaterial={addMaterial} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View materials</h2>
          <MaterialTable
            materials={materials}
            editRow={editRow}
            deleteMaterial={deleteMaterial}
          />
          <div className="flex-small">
            <button onClick={handleCost}>Get total</button>
            <h4>{totalCost}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
