import React, { useState, useEffect } from "react";

const EditMaterialForm = (props) => {
  const [material, setMaterial] = useState(props.currentMaterial);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMaterial({ ...material, [name]: value });
  };

  useEffect(() => {
    setMaterial(props.currentMaterial)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateMaterial(material.name, material);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={material.name}
        onChange={handleInputChange}
      />
      <label>Type</label>
      <input
        type="text"
        name="type"
        value={material.type}
        onChange={handleInputChange}
      />
      <label>Density</label>
      <input
        type="text"
        name="density"
        value={material.density}
        onChange={handleInputChange}
      />
      <label>Cost Per Pound</label>
      <input
        type="text"
        name="costPerPound"
        value={material.costPerPound}
        onChange={handleInputChange}
      />
      <button>Update material</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditMaterialForm;
