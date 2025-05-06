import { Stethoscope } from "lucide-react";
import React from "react";

export default function Cards(props) {
  const { icon, title, description } = props;
  return (
    <div className="snap-center bg-verde2 px-2 py-4 rounded-sm border-b-4 border-b-[var(--secundaria)] flex flex-col items-center text-center gap-2 bg-white shadow-lg">
      <span className="text-[var(--primaria)]">{icon}</span>
      <h3 className="text-2xl capitalize text-[var(--texto)]">{title}</h3>
      <p className="text-balance text-[var(--texto)]">{description}</p>
    </div>
  );
}
