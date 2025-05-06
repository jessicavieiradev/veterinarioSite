import React from "react";
import Cards from "./Cards";
import { Bone, Hospital, Microscope, RailSymbol, ScanHeart, Siren, Stethoscope } from "lucide-react";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-[#DCF3F9]">
      <div className="container mx-auto p-4 ">
        <h2 className="text-center text-2xl text-[var(--primaria)] font-bold">
          Nossos Servicos
        </h2>
        <div className="overflow-x-auto snap-x snap-mandatory grid grid-cols-[repeat(6,minmax(280px,1fr))] md:grid-cols-[repeat(2,minmax(300px,1fr))]  lg:grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 p-4">
          <Cards
            icon={<Stethoscope />}
            title="Consultas"
            description="Nossa equipe de profissionais experientes realiza um exame clínico detalhado para garantir a saúde e o bem-estar do seu pet."
          />
          <Cards
            icon={<Hospital />}
            title="Cirurgias"
            description="Ambiente adequado para a realização de cirurgias e internações. Nossa equipe oferece o melhor cuidado para o seu pet."
          />
          <Cards
            icon={<Bone />}
            title="Raio-x"
            description="Além de identificar problemas ósseos, o raio-X também pode detectar outras doenças como tumores, cálculos renais e outras alterações."
          />
          <Cards
            icon={<ScanHeart />}
            title="ultrassom"
            description="Através do ultrassom, podemos visualizar órgãos internos, detectar doenças, avaliar o coração e muito mais."
          />
          <Cards
            icon={<Microscope />}
            title="Exames Laboratoriais"
            description="Através da análise laboratorial, podemos detectar diversas doenças, como parasitas, infecções e doenças renais e hepáticas."
          />
          <Cards
            icon={<Siren />}
            title="Emergência"
            description="Estamos preparados para atendê-lo a qualquer hora. Conte conosco para cuidar do seu amigo em situações de emergência."
          />
        </div>
      </div>
    </section>
  );
}
