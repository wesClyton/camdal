import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import pin from "../assets/pin.png";
import { useEffect, useMemo, useState } from "react";
import { locations } from "../mocks/locations";

export function Maps({ showInfo }: { showInfo?: boolean }) {
  const [locale, setLocale] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const textNoInfo = useMemo(() => {
    return locale === 0
      ? "Cianorte fica no centro da região, próxima a Maringá, Umuarama, Campo Mourão e Paranavaí, facilitando o acesso rápido a diversos destinos."
      : "Paranavaí está conectada às principais rodovias, com fácil acesso às divisas com São Paulo e Mato Grosso do Sul, a apenas 70 km de Maringá.";
  }, [locale]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setLocale((prevLocale) => (prevLocale + 1) % locations.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, locations.length]);

  return (
     <div
      onMouseEnter={() => setIsHovered(true)} // Define isHovered como true ao passar o mouse
      onMouseLeave={() => setIsHovered(false)} // Define isHovered como false ao sair com o mouse
    >
      <ul className="flex justify-center items-center mb-6">
        {locations.map((location) => {
          return (
            <li
              key={location.name}
              onClick={() => {
                setLocale(location.id);
              }}
              className={`${
                locale === location.id
                  ? "bg-c-orange font-bold text-white"
                  : "bg-[#E9E9E6] font-light border-solid border-c-orange border"
              } rounded-full mx-2 cursor-pointer text-xs text-center  py-3 px-4 transition duration-300`}
            >
              {location.name}
            </li>
          );
        })}
      </ul>

      <APIProvider apiKey="AIzaSyA_rJsdmEfsR1_-xKuC5tGyCd_AXGi2LTk">
        <Map
          mapId={"bf51a910020fa25a"}
          style={{ width: "100%", height: "17.5rem", maxWidth: "100%" }}
          defaultCenter={{
            lat: locations[locale].lat,
            lng: locations[locale].lng,
          }}
          center={{
            lat: locations[locale].lat,
            lng: locations[locale].lng,
          }}
          defaultZoom={18}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          fullscreenControl={true}
        >
          <AdvancedMarker
            position={{
              lat: locations[locale].lat,
              lng: locations[locale].lng,
            }}
            onClick={() => {
              window.open(locations[locale].link, "_blank");
            }}
          >
            <img src={pin.src} alt="pin" />
          </AdvancedMarker>
        </Map>
      </APIProvider>

      {!showInfo && (
        <p className="mt-8 font-light text-sm max-w-xl text-center mx-auto">{textNoInfo}</p>
      )}

      {showInfo && (
        <div className="flex flex-col items-center justify-center mt-4">
          <a href={locations[locale].link} target="_blank" className="flex items-center gap-2 text-base mb-2 font-light"><span className="material-symbols-outlined text-c-blue text-xl">pin_drop</span>{locations[locale].address}</a>
          <div className="flex gap-5">
            <a href={`https://api.whatsapp.com/send/?phone=${locations[locale].whatsappLink}`} target="_blank" className="flex items-center gap-2 text-base mb-2 font-light"><span className="icon-whatsapp text-c-blue text-xl"></span>{locations[locale].whatsapp}</a>
            <a href={`tel:${locations[locale].phoneLink}`} target="_blank" className="flex items-center gap-2 text-base mb-2 font-light"><span className="material-symbols-outlined text-c-blue text-xl">call</span>{locations[locale].phone}</a>
          </div>
        </div>
      )}
    </div>
  );
}
