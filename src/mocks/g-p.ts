import gpImg from "../assets/carros/g-p.png";
import saveiroFront from "../assets/carros/g-p/saveiro-1.png";
import saveiroBack from "../assets/carros/g-p/saveiro-2.png";

export const gp = {
  id: 2,
  title: "Grupo P",
  subtitle: "Picape Manual",
  images: [gpImg.src, saveiroFront.src, saveiroBack.src],
  features: [
    {
      label: "Portas",
      value: "02",
    },
    {
      label: "Porta Malas (caçamba)",
      value: "Até 924 litros",
    },
    {
      label: "Motor",
      value: "1.6 MSI Flex – 116 CV",
    },
    {
      label: "Combustível",
      value: "Flex",
    },
    {
      label: "Vidros",
      value: "Elétricos",
    },
    {
      label: "Travas",
      value: "Elétricas",
    },
    {
      label: "Ar Condicionado",
      value: "Sim",
    },
    {
      label: "Direção",
      value: "Hidráulica",
    },
    {
      label: "Freios",
      value: "ABS com EBD",
    },
    {
      label: "Computador de bordo",
      value: 'Sim"',
    },
  ],
};
