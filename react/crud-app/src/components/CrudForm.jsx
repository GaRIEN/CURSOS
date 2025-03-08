import React, { useState } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState({ initialForm });

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div className="container w-1/2 mx-auto">
      <h3 className=" pt-5 font-mono font-semibold text-white">Agregar</h3>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 ">
          <div className="sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900 text-white"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2  focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={handleChange}
                value={form.name}
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="constellation"
              className="block text-sm/6 font-medium text-gray-900 text-white"
            >
              Constelacion
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="constellation"
                placeholder="constellation"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2  focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={handleChange}
                value={form.constellation}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button type="submit" className="rounded-md bg-green-600 px-4 py-1 text-md font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">enviar</button>
          <button type="button" onClick={handleReset} className="rounded-md bg-indigo-600 px-4 py-1 text-md font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
