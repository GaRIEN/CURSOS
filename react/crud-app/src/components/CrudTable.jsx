import React from "react";
import CrudTableRows from "./CrudTableRows";

const CrudTable = ({ data }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">Tabla de Datos</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 bg-gray-900 text-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-gray-300">
            <tr >
              <th className="w-2/5 px-6 py-3 text-center text-sm font-semibold">
                Nombre
              </th>
              <th className=" w-2/5 px-6 py-3 text-center text-sm font-semibold">
                Constelación
              </th>
              <th className="w-1/5 px-6 py-3 text-center text-sm font-semibold">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-400">
                  Sin datos
                </td>
              </tr>
            ) : (
              data.map((el) => <CrudTableRows key={el.id} el={el} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudTable;
