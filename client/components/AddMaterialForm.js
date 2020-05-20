import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    name: "",
    type: "",
    density: "",
    costPerPound: "",
  };
  const [material, setMaterial] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMaterial({ ...material, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !material.name ||
          !material.density ||
          !material.type ||
          !material.costPerPound
        )
          return;

        props.addMaterial(material);
        setMaterial(initialFormState);
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
      <button>Add new material</button>
    </form>
  );
};

export default AddUserForm;
