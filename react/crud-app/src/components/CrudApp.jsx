import React from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { useState } from "react";

const initialDb = [
  {
    id: 1,
    name: "seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
];

const CrudApp = () => {
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    console.log(data);
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de que quieres eliminar el registro con id ${id}`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  const [db, setDb] = useState(initialDb);
  return (
    <div className=" w-8/10 mx-auto">
      <h2 className="font-mono text-3xl font-bold text-center pt-8 text-white">
        CRUD APP
      </h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
