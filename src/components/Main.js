"use client"

import React, { useEffect } from "react";
import Button from "./Button";
import mainMobile from "../../public/mainMobile.jpg";
import mainvet from "../../public/mainvet.png";

export default function Main() {
  useEffect(() => {
    const basePath =
      process.env.NODE_ENV === "production" ? "/veterinarioSite" : "";
    document.documentElement.style.setProperty(
      "--bg-mobile-image",
      `url('${basePath}/mainMobile.jpg')`
    );
    document.documentElement.style.setProperty(
      "--bg-desktop-image",
      `url('${basePath}/mainvet.png')`
    );
  }, []);
  return (
    <main className="relative bg-[image:var(--bg-mobile-image)] md:bg-[image:var(--bg-desktop-image)] bg-no-repeat bg-cover bg-center flex flex-col gap-8 items-center py-48 px-16 main-with-overlay z-1 text-white ">
      <h1 className="text-3xl md:text-4xl text-shadow-sm text-balance text-center font-source font-bold">
        Seu pet em boas mãos!
      </h1>
      <p className="text-balance max-w-md text-ellipsis text-center text-shadow-sm">
        Em nosso
        <span className="text-[var(--secundaria)]">
          {" "}
          Centro Veterinário 24h{" "}
        </span>
        oferecemos cuidados completos com muito amor e carinho. Tudo o que seu
        amigo precisa!
      </p>
      <Button />
    </main>
  );
}
