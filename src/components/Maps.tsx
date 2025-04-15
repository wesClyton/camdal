import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import pin from "../assets/pin.png";
import { useState } from "react";

export function Maps({ showInfo }: { showInfo?: boolean }) {
  const [locale, setLocale] = useState(0);

  const locations = [
    {
      id: 0,
      name: "Cianorte",
      lat: -23.659928913608695,
      lng: -52.601109276941806,
      address: "Avenida Goias, 1178, Zona 5 - CEP: 87209-006",
      whatsapp: "(44) 99103 8369",
      phone: "(44) 3039 4721",
      link: "https://www.google.com.br/maps/place/Av.+Goi%C3%A1s,+1178+-+Zona+5+(Armazens),+Cianorte+-+PR,+87200-000/@-23.6602656,-52.6017235,19.5z/data=!4m6!3m5!1s0x94ed5a1401cee593:0x5fde2356a5a431cb!8m2!3d-23.6600178!4d-52.6010037!16s%2Fg%2F11cslw6d85?entry=tts&g_ep=EgoyMDI0MDUyMi4wKgBIAVAD",
    },
    {
      id: 1,
      name: "Paranavaí",
      lat: -23.092521611804713,
      lng: -52.46959906030761,
      address:
        "Avenida Distrito Federal, Jardim Progresso - 1580 - CEP: 87701-310",
      whatsapp: "(44) 99921 5276",
      phone: "(44) 3900-2425",
      link: "https://www.google.com/maps/place/Av.+Distrito+Federal,+1580+-+Centro,+Paranava%C3%AD+-+PR,+87701-310/@-23.0925314,-52.4696018,17z/data=!3m1!4b1!4m6!3m5!1s0x94929642c5c62579:0xd4f61039f060de12!8m2!3d-23.0925314!4d-52.4696018!16s%2Fg%2F11c43_2kbt?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <>
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
                  : "bg-[#E9E9E6] font-light"
              } rounded-full mx-2 cursor-pointer text-xs text-center  py-3 px-4 transition duration-300`}
            >
              {location.name}
            </li>
          );
        })}
      </ul>

      <APIProvider apiKey="AIzaSyA_rJsdmEfsR1_-xKuC5tGyCd_AXGi2LTk">
        <Map
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
        >
          <Marker
            position={{
              lat: locations[locale].lat,
              lng: locations[locale].lng,
            }}
            icon={{
              url: pin.src,
            }}
            onClick={() => {
              window.open(locations[locale].link, "_blank");
            }}
          />
        </Map>
      </APIProvider>

      {showInfo && (
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-center text-sm font-light">
            {locations[locale].address}
            <br />
            {locations[locale].whatsapp}
            <br />
            {locations[locale].phone}
          </p>
        </div>
      )}
    </>
  );
}
