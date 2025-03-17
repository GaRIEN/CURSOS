import React from "react";
import Message from "./Message.jsx";
import SongArtist from "./SongArtist.jsx";
import SongLyric from "./SongLyric.jsx";

const SongDetails = ({ search, lyric, bio }) => {
  console.log(search);
  console.log(lyric, bio);

  if (!lyric || !bio) return null;

  return (
    <div>
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message message={`Error: no existe el artista "${search.artist}"`} />
      )}

      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message message={`Error: no existe la canción "${search.song}"`} />
      ) : (
        <SongLyric lyric={lyric} />
      )}
    </div>
  );
};

export default SongDetails;
