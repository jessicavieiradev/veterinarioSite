import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-[var(--secundaria)] py-8">
      <div className="flex flex-col md:flex-row container mx-auto justify-between items-center gap-8 text-white">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="text-sm">
            <h3 className="font-bold">Endereco</h3>
            <p>Estrada de Itapecerica,3777; Loja 26</p>
            <p>Capão Redondo</p>
            <p>Sao Paulo, Sp</p>
          </div>
          <div className="text-sm">
            <h3 className="font-bold">Contato</h3>
            <p>(11) 98954-1000</p>
            <p>cvestradadeitapecerica@gmail.com</p>
          </div>
          <div className="text-sm">
            <h3 className="font-bold">Horario</h3>
            <p>Atendimento 24h</p>
          </div>
        </div>
        <div className="relative w-32 h-32 bg-white rounded-full">
          <Image
            src="/logo.png"
            alt="logo petvet"
            fill
            className="object-contain p-4"
          />
        </div>
      </div>
    </footer>
  );
}
