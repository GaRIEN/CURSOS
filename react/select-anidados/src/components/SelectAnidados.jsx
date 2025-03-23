import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "0c15de39-d911-4a1f-85fa-ae4aa9cea3ea";

  return (
    <div className="w-full mt-8 xl:w-8/12 mx-auto ">
      <h3 className="text-center text-xl font-semibold text-emerald-500">
        Mexico
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-4">
        <SelectList
          title="estado"
          url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />

        {state && (
          <SelectList
            title="municipios"
            url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
            handleChange={(e) => {
              setTown(e.target.value);
            }}
          />
        )}

        {town && (
          <SelectList
            title="colonia"
            url={`https://api.copomex.com/query/get_colonia_por_municipio/${state}?token=${TOKEN}`}
            handleChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SelectAnidados;
