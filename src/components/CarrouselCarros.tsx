import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carData } from "../mocks/cars";
import logoVertical from "../assets/logo-vertical.png";

export default function CarCarousel() {
  const [index, setIndex] = useState(0);
  const car = carData[index];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % carData.length);
  };

  return (
    <section>
      <h2 className="w-96 m-auto text-2xl font-bold text-center mb-5">
        Conheça nossos carros mais alugados
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
      <div className="relative w-full max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-12">
        <img
          src={logoVertical.src}
          alt="Logo"
          className="absolute left-0 z-10"
        />
        <div className="relative h-72 z-20 col-span-7 -right-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={car.title}
              src={car.image}
              alt={car.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full object-contain"
            />
          </AnimatePresence>
        </div>

        <div className="space-y-4 bg-c-white p-16 col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={car.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">{car.title}</h2>
              <p className="font-light mb-5">{car.subtitle}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base ">
                {car.features.map((f, i) => (
                  <li key={i} className="flex-1/2 text-xs">
                    {f.label}
                    <br />
                    <strong>{f.value}</strong>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="h-11 flex items-center justify-center bg-c-orange text-white rounded transition duration-300 mt-6"
              >
                Reservar Agora
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
