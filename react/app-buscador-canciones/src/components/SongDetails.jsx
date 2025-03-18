import React from "react";
import Message from "./Message.jsx";
import SongArtist from "./SongArtist.jsx";
import SongLyric from "./SongLyric.jsx";

const SongDetails = ({ search, lyric, bio }) => {
  console.log(search);

  console.log("los datos", lyric);
  console.log("los  song", bio);

  if (!lyric || !bio) return null;

  return (
    <div className=" pt-8 grid grid-cols-1   gap-8 xl:grid-cols-2 xl:mt-20 ">
      {bio.artists ? (
        <SongArtist artista={bio.artists[0]} />
      ) : (
        <Message message={`Error: no existe el artista "${search.artist}"`} />
      )}

      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message message={`Error: no existe la canción "${search.song}"`} />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics} />
      )}
    </div>
  );
};

export default SongDetails;
