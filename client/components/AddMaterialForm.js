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
      <button>Add new material</button>
    </form>
  );
};

export default AddUserForm;
