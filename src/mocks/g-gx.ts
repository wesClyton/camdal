import ggxImage from "../assets/carros/g-gx.png";
import dusterFront from "../assets/carros/g-gx/duster1.png";
import dusterBack from "../assets/carros/g-gx/duster2.png";
import tcrossFront from "../assets/carros/g-gx/tcross1.png";
import tcrossback from "../assets/carros/g-gx/tcross2.png";

export const ggx = {
  id: 6,
  title: "Grupo GX",
  subtitle: "SUV automático",
  images: [
    ggxImage.src,
    dusterFront.src,
    dusterBack.src,
    tcrossFront.src,
    tcrossback.src,
  ],
  features: [
    {
      label: "Portas",
      value: "04",
    },
    {
      label: "Porta Malas",
      value: "425 litros",
    },
    {
      label: "Vidros",
      value: "Elétricos",
    },
    {
      label: "Som interno",
      value: "Central Multimídia",
    },
    {
      label: "Volante",
      value: "Regulagem de Altura",
    },
    {
      label: "Ocupantes",
      value: "05",
    },
    {
      label: "Cambio",
      value: "Automático",
    },
    {
      label: "Freios",
      value: "ABS",
    },
    {
      label: "Airbags",
      value: "Duplo",
    },
    {
      label: "Travas",
      value: "Elétricas",
    },
    {
      label: "Direção",
      value: "Elétrica",
    },
    {
      label: "Ar Condicionado",
      value: "Sim",
    },
    {
      label: "Motor",
      value: "1.0 Turbo",
    },
    {
      label: "Computador de bordo",
      value: "Sim",
    },
  ],
};
