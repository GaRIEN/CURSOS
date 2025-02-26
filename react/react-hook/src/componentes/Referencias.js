import React, { useRef } from "react";

export default function Referenciashook() {
  let refMenu = useRef(),
    refMenuBtn = useRef();
  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };
  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">Section 1</a>
        <br />
        <a href="#">Section 2</a>
        <br />
        <a href="#">Section 3</a>
        <br />
        <a href="#">Section 4</a>
        <br />
        <a href="#">Section 5</a>
      </nav>
    </>
  );
}
