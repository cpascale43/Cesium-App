import React from "react";

const MaterialTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Material Type</th>
        <th>Density</th>
        <th>Cost Per Pound</th>
      </tr>
    </thead>
    <tbody>
      {props.materials.length > 0 ? (
        props.materials.map((material, idx) => (
          <tr key={idx}>
            <td>{material.name}</td>
            <td>{material.type}</td>
            <td>{material.density} lb/ft3</td>
            <td>${material.costPerPound}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(material);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteMaterial(material.name)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No materials</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default MaterialTable;
