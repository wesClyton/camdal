import { useEffect, useState } from "react";
import { carData } from "../mocks/cars";
import { DR } from "./DR";
import { CardCarro } from "./CardCarro";

export function NossosCarrosContent() {
  const [index, setIndex] = useState(0);

  const renderButtons = () => (
    <>
      <li>
        <button
          className={getButtonClass(index === -1)}
          onClick={() => setIndex(-1)}
        >
          Todos
        </button>
      </li>
      {carData.map((carro) => (
        <li key={`${carro.title}carlist`}>
          <button
            className={getButtonClass(index === carro.id)}
            onClick={() => setIndex(carro.id)}
          >
            {carro.title}
          </button>
        </li>
      ))}
    </>
  );

  const getButtonClass = (isActive: boolean) =>
    `${
      isActive ? "bg-c-orange font-bold text-white" : "bg-[#E9E9E6] font-light"
    } rounded-full cursor-pointer text-xs text-center py-3 px-4 transition duration-300 min-w-[125px]`;

  const filteredCars = index === -1 ? carData : carData.filter((carro) => carro.id === index);

  return (
    <section>
      <h2 className="max-w-96 m-auto text-2xl font-bold text-center mb-5">
        Nossos <DR>Carros</DR>
      </h2>
      <ul className="flex justify-center items-center mt-4 mb-6 max-w-2xl mx-auto flex-wrap gap-4">{renderButtons()}</ul>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {filteredCars.map((carro) => (
          <CardCarro car={carro} key={carro.title} />
        ))}
      </div>
    </section>
  );
}
