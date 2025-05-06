import React from "react";
import Button from "./Button";

export default function Main() {
  return (
    <main className="relative bg-[url('./mainMobile.jpg')] md:bg-[url('./mainvet.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-8 items-center py-36 px-16 main-with-overlay z-1 text-white">
      <h1 className="text-3xl md:text-4xl text-shadow-sm text-balance text-center font-source font-bold"> 
        Seu pet em boas mãos!
      </h1>
      <p className="text-balance max-w-md text-ellipsis text-center text-shadow-sm">
        Em nosso 
        <span className="text-[var(--secundaria)]"> Centro Veterinário 24h </span>
         oferecemos cuidados completos com muito amor e carinho. Tudo o que seu
        amigo precisa!
      </p>
      <Button />
    </main>
  );
}
