import React, { useState } from "react";

const initialform = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialform);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("faltan datos");
    }
    handleSearch(form);
    setForm(initialform);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 xl:grid-cols-12 items-center gap-6">
          <div className="mt-5 xl:col-span-10">
            <div className="grid xl:grid-cols-2 gap-5">
              <div className="">
                <label
                  htmlFor="artist"
                  className="block text-sm font-medium text-white xl:text-xl"
                >
                  Artista
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="artist"
                    placeholder="artista"
                    onChange={handleChange}
                    value={form.artist}
                    className="block w-full rounded-md bg-white px-3 py-1 text-gray-600 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 xl:py-2 xl:text-xl"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="song"
                  className="block text-sm font-medium text-white xl:text-xl"
                >
                  Song
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="song"
                    placeholder="cancion"
                    onChange={handleChange}
                    value={form.song}
                    className="block w-full rounded-md bg-white px-3 py-1 text-gray-600 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 xl:py-2 xl:text-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 h-full flex justify-center items-end">
            <button
              type="submit"
              className=" block text-white bg-indigo-600 rounded-md px-4 py-1 xl:w-8/12 xl:text-xl xl:font-semibold hover:bg-cyan-500 hover:Shadow-lg transition-all duration-200 ease-in-out cursor-pointer "
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SongForm;
