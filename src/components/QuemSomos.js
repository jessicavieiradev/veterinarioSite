import Image from "next/image";
import React from "react";

export default function QuemSomos() {
  return (
    <section
      id="quemsomos"
      className="container mx-auto items-center flex flex-col-reverse lg:flex-row px-4 py-8 md:py-24 md:px-16 gap-4"
    >
      <div className="relative min-h-[280px] w-full lg:w-1/2">
        <Image
          src="../../public/quemsomos.jpg"
          alt="mao segurando patinha de cao"
          fill
          className="object-coover rounded-sm inset-0"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--primaria)]">
          Quem somos
        </h2>
        <p className="text-balance leading-5 text-[var(--texto)]">
          Nossa clínica nasceu do amor pelos animais e do desejo de oferecer o
          melhor cuidado para os nossos amigos de quatro patas. Nossa história é
          marcada pela dedicação e pela busca constante por excelência.
        </p>
        <p className="text-balance leading-5 text-[var(--texto)]">
          Acreditamos que cada animal é único e merece um atendimento
          personalizado. Por isso, investimos em uma equipe de profissionais
          altamente qualificados e apaixonados pelo que fazem. Nossa clínica
          conta com equipamentos modernos e um ambiente acolhedor, onde seu pet
          se sentirá seguro e confortável.
        </p>
      </div>
    </section>
  );
}
