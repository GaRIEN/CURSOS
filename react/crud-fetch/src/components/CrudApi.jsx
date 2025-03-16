import React, { useState, useEffect } from 'react';
import CrudFormApi from "./CrudFormApi";
import CrudTableApi from './CrudTableApi'
import {helpHttp} from '../helpers/helpHttp'
import Loaders from './loaders/Loaders';
import Message from './Message';



const CrudApi = () => {
  const [db, setDb] = useState();
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [dataToEdit, setDataToEdit] = useState(null);

let api= helpHttp();
let url = "http://localhost:5000/santos"

useEffect(() => {
  api.get(url).then((result) => {
    if(!result.err){
      console.log(result)
      setDb(result)
    }else{
      setDb(null)
    }
  })
}, [])


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


  return (
    <div className=" w-8/10 mx-auto">
      <h2 className="font-mono text-3xl font-bold text-center pt-8 text-white">
        CRUD API
      </h2>
      <CrudFormApi
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      { loading && <Loaders/>}
      
      { error && <Message/>}
      <CrudTableApi
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApi;
