import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [termionos, setTerminos] = useState(false);


//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     console.log("se envio el formulario")
//   }

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>

//         <label htmlFor="nombre">Nombre</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />

//         <p> elige tu sabor favorito</p>
//         <input
//           type="radio"
//           id="piña"
//           name="sabor"
//           value="piña"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">piña</label>
//         <input
//           type="radio"
//           id="platano"
//           name="sabor"
//           value="platano"
//           onChange={(e) => setSabor(e.target.value)}
//           defaultChecked

//         />
//         <label htmlFor="">platano</label>

//         <p>elije tu lenguaje favorito</p>
//         <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="" >
//             <option value="js">javascript</option>
//             <option value="php">php</option>
//             <option value="py">python</option>
//             <option value="java">java</option>
//             <option value="go">go</option>
//         </select>

//         <p>CHECKBOX</p>
//         <input type="checkbox" id="terminos" name="terminos" onChange={(e)=>setTerminos(e.target.checked)} />
//         <label htmlFor="terminos">Acepto los terminos y condiciones</label>
//         <br />

//         <input type="submit" />
        
//       </form>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />

//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState({});
  


  const handleChange =e=>{
    //del formulario que tienes ya , me traiga el name y le asigne el value 
    setForm({
      ...form,[e.target.name]:e.target.value
    })
  }
  const handleChecked =(e)=>{
    setForm({
      ...form,[e.target.name]:e.target.checked
    })
  }
  const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("se envio el formulario")
      }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <p> elige tu sabor favorito</p>
        <input
          type="radio"
          id="piña"
          name="sabor"
          value="piña"
          onChange={handleChange}
        />
        <label htmlFor="">piña</label>
        <input
          type="radio"
          id="platano"
          name="sabor"
          value="platano"
          onChange={handleChange}
          defaultChecked

        />
        <label htmlFor="">platano</label>

        <p>elije tu lenguaje favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="" >
            <option value="js">javascript</option>
            <option value="php">php</option>
            <option value="py">python</option>
            <option value="java">java</option>
            <option value="go">go</option>
        </select>

        <p>CHECKBOX</p>
        <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} />
        <label htmlFor="terminos">Acepto los terminos y condiciones</label>
        <br />

        <input type="submit" />
        
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}
