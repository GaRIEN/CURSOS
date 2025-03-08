import React from "react";

const CrudTableRows = ({el}) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button>editar</button>
        <button>eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRows;
