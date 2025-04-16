import { useState } from "react";
import { carData } from "../mocks/cars";
import { DR } from "./DR";

export function NossosCarrosContent() {

  const [index, setIndex] = useState(0);
  const car = carData[index];

  return (
    <section>
      <h2 className="max-w-96 m-auto text-2xl font-bold text-center mb-5">
        Nossos <DR>Carros</DR>
      </h2>
      <ul className="flex justify-center items-center mt-4">
        {carData.map((carro) => (
          <li
            key={`${carro.title}carlist`}
            className={`${
              index === carro.id
                ? "bg-c-orange font-bold text-white"
                : "bg-[#E9E9E6] font-light"
            } rounded-full mx-2 cursor-pointer text-xs text-center  py-3 px-4 transition duration-300`}
            onClick={() => {
              setIndex(carro.id);
            }}
          >
            {carro.title}
          </li>
        ))}
      </ul>

      <div></div>
    </section>
  )
}
