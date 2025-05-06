import React from "react";

function MapaIncorporado() {
  return (
    <div className="relative w-full overflow-hidden">
      <div style={{ paddingBottom: "65%", height: 0 }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Estrada+de+Itapecerica%2C+3777%3B+Loja+26+Cap%C3%A3o+Redondo&output=embed"
        />
      </div>
      <a
        href="https://freeairecipegenerator.com"
        rel="noopener noreferrer"
        target="_blank"
        className="absolute w-px h-px p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0 clip-rect-0"
      >
        freeairecipegenerator.com
      </a>
    </div>
  );
}

export default MapaIncorporado;
