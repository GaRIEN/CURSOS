import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SongForm from "./SongForm";
import Loaders from "./loader/Loaders";
import SongDetails from "./SongDetails";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      const artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/
            ${song}`;

      setLoading(true);

      const [artisRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      console.log(artisRes, songRes);
      setBio(artisRes);
      setLyric(songRes);

      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h1>SONG SEARCH </h1>
      <SongForm handleSearch={handleSearch} />
      {loading && <Loaders />}
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  );
};

export default SongSearch;
