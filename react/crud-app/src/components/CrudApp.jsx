import React from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { useState } from 'react';

const initialDb =[
{
    id:1,
    name:"seiya",
    constellation: "Pegaso"
},
{
    id:2,
    name:"Shiryu",
    constellation: "Dragón"
},
];

const CrudApp =()=>{
    const [db, setDb] = useState(initialDb)
    return(
        <div>
            <h2>CRUD APP</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp;