import React, { useState, useEffect } from "react";

const EditMaterialForm = (props) => {
  const [material, setMaterial] = useState(props.currentMaterial);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMaterial({ ...material, [name]: value });
  };

  useEffect(() => {
    setMaterial(props.currentMaterial);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateMaterial(material.name, material);
      }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          value={material.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Type
        <input
          type="text"
          name="type"
          value={material.type}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Density
        <input
          type="text"
          name="density"
          value={material.density}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Cost Per Pound
        <input
          type="text"
          name="costPerPound"
          value={material.costPerPound}
          onChange={handleInputChange}
        />
      </label>
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
