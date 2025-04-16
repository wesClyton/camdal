import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carData } from "../mocks/cars";
import logoVertical from "../assets/logo-vertical.png";

export default function CarCarousel() {
  const [index, setIndex] = useState(0);
  const car = carData[index];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % carData.length);
  };

  // useEffect(() => {
  //   let timer1 = setInterval(() => nextSlide(), 3 * 1000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  return (
    <section>
      <h2 className="max-w-96 m-auto text-2xl font-bold text-center mb-5">
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

      <div className="relative w-full max-w-6xl mx-auto p-4 md:grid md:grid-cols-12 gap-6 items-center mt-12">
        <img
          src={logoVertical.src}
          alt="Logo"
          className="absolute left-0 z-10 hidden md:block"
        />
        <div className="relative md:static lg:relative h-52 lg:h-72 z-20 md:col-span-6 lg:col-span-7 md:-right-20">
          <AnimatePresence mode="wait">
            <motion.img
              key={car.title}
              src={car.image}
              alt={car.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 h-full md:h-72 lg:h-auto w-auto xl:object-contain left-[50%] translate-x-[-50%] md:top-36 lg:top-0 md:left-0 md:translate-x-0 lg:left-auto lg:max-w-fit"
            />
          </AnimatePresence>
        </div>

        <div className="space-y-4 bg-c-white p-4 md:p-8 lg:p-16 md:col-span-6 lg:col-span-5 w-full">
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
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base ">
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
