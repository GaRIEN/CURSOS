import React, { useState, useEffect } from "react";

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
    if(!form.artist || !form.song){
      alert('faltan datos')
    }
    handleSearch(form)
    setForm(initialform)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Artista</label>
        <input
          type="text"
          name="artist"
          placeholder="artista"
          onChange={handleChange}
          value={form.artist}
        />
        <label htmlFor="song">Song</label>
        <input
          type="text"
          name="song"
          placeholder="cancion"
          onChange={handleChange}
          value={form.song}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SongForm;
