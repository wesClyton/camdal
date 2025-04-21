import gcsImg from "../assets/carros/g-cs.png";
import onixFront from "../assets/carros/g-cs/onixcs1.jpg";
import onixBack from "../assets/carros/g-cs/onixcs2.jpg";
import hb20Front from "../assets/carros/g-cs/hb20cs1.jpg";
import hb20Back from "../assets/carros/g-cs/hb20cs2.jpg";

export const gcs = {
  id: 2,
  title: "Grupo CS",
  subtitle: "Intermediário Hatch",
  images: [
    gcsImg.src,
    onixFront.src,
    onixBack.src,
    hb20Front.src,
    hb20Back.src,
  ],
  features: [
    {
      label: "Portas",
      value: "04",
    },
    {
      label: "Porta Malas",
      value: "275 litros",
    },
    {
      label: "Vidros",
      value: "Elétricos",
    },
    {
      label: "Som interno",
      value: "Kit Multimidia com espelhamento de Sistema Androide ou IOS",
    },
    {
      label: "Direção",
      value: "Elétrica",
    },
    {
      label: "Ocupantes",
      value: "05",
    },
    {
      label: "Freios",
      value: "ABS",
    },
    {
      label: "Airbags",
      value: "06",
    },
    {
      label: "Travas",
      value: "Elétricas",
    },
    {
      label: "Faróis",
      value: "Acendimento Automático",
    },
    {
      label: "Ar Condicionado",
      value: "Sim",
    },
    {
      label: "Cambio",
      value: "Mecânico",
    },
    {
      label: "Banco",
      value: "Tecido",
    },
  ],
};
