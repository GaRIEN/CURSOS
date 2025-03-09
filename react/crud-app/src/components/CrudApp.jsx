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
        <div className=' w-8/10 mx-auto'>
            <h2 className='font-mono text-3xl font-bold text-center pt-8 text-white'>CRUD APP</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp;