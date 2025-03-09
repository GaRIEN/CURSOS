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
    <div className="  mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-6 place-items-center">
          {/* Campo Nombre */}
          <div className="sm:col-span-1 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 
                   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                value={form.name}
              />
            </div>
          </div>

          {/* Campo Constelación */}
          <div className="sm:col-span-1 w-full">
            <label
              htmlFor="constellation"
              className="block text-sm font-medium text-white"
            >
              Constelación
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="constellation"
                placeholder="Constelación"
                className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 
                   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                value={form.constellation}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-green-600 px-4 py-1 text-md font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            enviar
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md bg-indigo-600 px-4 py-1 text-md font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
