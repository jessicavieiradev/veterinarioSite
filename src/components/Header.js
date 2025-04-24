import Image from "next/image";
import logo from "../images/logo.png";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col py-6 px-3">
      <div className="flex justify-between">
        <div className="h-18 w-18">
          <Image src={logo} alt="logo vet" />
        </div>

        <div className="flex gap-12">
          <div>
            <p>
              Contato <br />{" "}
              <span className="text-purple-800">XX X XXXX-XXXX</span>
            </p>
          </div>

          <div>
            <p>
              Endereco <br />{" "}
              <span className="text-purple-800">rua tal
              tal 653</span> 
            </p>
          </div>

          <div>
            <p>
              Atendimento <br />{" "}
              <span className="text-purple-800">Domingo a
              domingo <br /> 08h as 23h</span> 
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </header>
  );
}
