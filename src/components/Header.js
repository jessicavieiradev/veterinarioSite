"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [fechado, setFechado] = useState(true);

  return (
    <header className="border-b-2 border-[var(--primaria)] p-4  top-0 z-50 bg-white sticky">
      <div className="w-full md:container md:mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-2/3 flex justify-between items-center ">
          <div className="relative w-28 h-12">
            <Image
              src="./logo.png"
              alt="logo petvet"
              fill
              className="object-contain"
            />
          </div>

          <div className="block md:hidden">
            <button onClick={() => setFechado(!fechado)}>
              {fechado ? <Menu /> : <X />}
            </button>
          </div>
          <nav
            className={`${
              fechado
                ? "hidden"
                : "absolute top-0 left-0 w-full bg-white z-10 shadow-md"
            } md:block md:static top-20 right-0 md:w-auto w-full transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row text-center gap-8 text-sm text-[var(--texto)] md:p-0 p-4">
              <li>
                <Link
                  href="/"
                  className="hover:underline hover:text-[var(--secundaria)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#quemsomos"
                  className="hover:underline hover:text-[var(--secundaria)]"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:underline hover:text-[var(--secundaria)]"
                >
                  Servicos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="hover:underline hover:text-[var(--secundaria)] leading-1.5"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <Button />
        </div>
      </div>
    </header>
  );
}
