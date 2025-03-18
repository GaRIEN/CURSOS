import React from "react";

const SongLyric = ({ lyric, title }) => {
  console.log("lirica en su componente liorica ", lyric);
  return (
    <div className="text-white">
      <h3 className="text-3xl text-white font-bold text-center">Letras de {title}</h3>
      <blockquote className="whitespace-pre-wrap text-center mt-8 text-lg">{lyric}</blockquote>
    </div>
  );
};

export default SongLyric;
