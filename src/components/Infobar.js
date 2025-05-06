import { ClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import React from 'react'

export default function Infobar() {
  return (
    <div className=" bg-[var(--secundaria)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-2 gap-2 md:gap-8 text-white">
        <span className="flex items-center gap-1 text-[12px]">
          <PhoneIcon className="size-3" /> (11) 98954-1000
        </span>
        <span className="flex items-center md:gap-1 text-[12px] text-center">
          <MapPinIcon className="size-3"/>Estrada de Itapecerica, 3777
          Loja 26 Capão Redondo
        </span>
        <span className="flex items-center gap-1 text-[12px]">
          <ClockIcon className="size-3" />
          24h
        </span>
      </div>
    </div>
  );
}
