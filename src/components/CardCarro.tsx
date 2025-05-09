import { useEffect, useRef, useState } from "react";

interface IProps {
  car: {
    title: string;
    subtitle: string;
    images: string[];
    features: { label: string; value: string }[];
  };
}

export function CardCarro({ car }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === car.images.length - 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current); // Pausa o autoplay ao clicar
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 md:p-14 bg-white rounded-2xl shadow-md w-full">
      {/* Image Carousel */}
      <div className="w-full lg:w-2/3 flex flex-col items-center mb-6 lg:mb-0 relative">
        <div className="w-full relative overflow-hidden h-64 sm:h-72 md:h-80">
          {car.images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Carro ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain rounded-md transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 mt-4">
          {car.images.slice(1).map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Selecionar imagem ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Car Info */}
      <div className="w-full lg:w-1/3">
        <div className="text-sm text-gray-800">
          <h2 className="text-2xl font-bold">{car.title}</h2>
          <p className="font-light mb-5">{car.subtitle}</p>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base">
            {car.features.map((f, i) => (
              <li key={i} className="flex-1/2 text-xs">
                {f.label}
                <br />
                <strong>{f.value}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <button className="bg-c-orange hover:bg-c-blue hover:cursor-pointer text-white font-light px-6 py-2 rounded-md text-sm w-full">
            Reservar agora
          </button>
        </div>
      </div>
    </div>
  );
}
