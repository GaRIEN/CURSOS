import React from "react";

const SongArtist = ({ artista }) => {
  console.log("los datos del artista son", artista);
  return (
    <div className="w-full place-self-center">
      <h3 className="text-3xl text-white font-bold text-center">
        {artista.strArtist}
      </h3>
      <img
        src={artista.strArtistThumb}
        alt=""
        className="rounded-full w-120 h-120 my-8 mx-auto"
      />
      {artista.strBiographyES.split("\n").map((parrafo, index) => (
        <p key={index} className="text-white text-lg mb-2 font-sd">
          {parrafo}
        </p>
      ))}{" "}
    </div>
  );
};

export default SongArtist;
