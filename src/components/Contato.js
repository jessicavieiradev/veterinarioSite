import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import MapaIncorporado from "./Mapa";
import Image from "next/image";

export default function Contato() {
  return (
    <section id="contato" className="py-16 ">
      <div className="container mx-auto flex gap-4 p-4 md:px-20">
        <div className="relative min-h-[280px] w-1/2 hidden md:block">
          <Image
            src="../../public/contato.jpg"
            alt="filhote de cao"
            fill
            className="object-cover rounded-sm inset-0"
          />
        </div>
        <div className="w-full md:w-1/2 h-1/2 flex flex-col justify-around items-center gap-4">
          <div className="px-4 flex-1 w-full">
            <h2 className="text-xl md:text-2xl mb-4 text-[var(--primaria)] font-bold">
              Entre em contato
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <MapPinIcon className="text-[var(--primaria)] size-4 md:size-auto" />
                  <h2 className="text-[var(--texto)]">Endereco</h2>
                </div>
                <p className="flex text-sm text-[var(--texto)]">
                  Estrada de Itapecerica, 3777; Loja 26 Capão Redondo
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <PhoneIcon className="text-[var(--primaria)] size-4 md:size-auto" />
                  <h2 className="text-[var(--texto)]">Telefone</h2>
                </div>
                <p className="flex text-sm text-[var(--texto)]">
                  (11) 98954-1000
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <MailIcon className="text-[var(--primaria)] size-4 md:size-auto" />
                  <h2 className="text-[var(--texto)]">Email</h2>
                </div>
                <p className="flex text-sm text-[var(--texto)]">
                  cvestradadeitapecerica@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 ">
            <MapaIncorporado />
          </div>
        </div>
      </div>
    </section>
  );
}
