import React, { useState, useEffect } from "react";
import SelectList from "./SelectList";

const SelectAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h3>Mexico</h3>
      <SelectList
        title="estados"
        url=""
        handleChange={(e) => {
          setState(e.target.value)
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url=""
          handleChange={(e) => {
            setTown(e.target.value)
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonias"
          url=""
          handleChange={(e) => {
            setSuburb(e.target.value)
          }}
        />
      )}
    </div>
  );
};

export default SelectAnidados;
