import React from "react";

const CrudTableRows = ({el}) => {
  return (
    <tr>
      <td className="px-6 py-4 text-center text-gray-400">{el.name}</td>
      <td className="px-6 py-4 text-center text-gray-400">{el.constellation}</td>
      <td className="px-6 py-4 text-center flex gap-4 justify-center" >
        <button className="py-2 px-3 rounded-lg border border-gray-400 cursor-pointer">editar</button>
        <button className="py-2 px-3 rounded-lg border border-gray-400 cursor-pointer">eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRows;
