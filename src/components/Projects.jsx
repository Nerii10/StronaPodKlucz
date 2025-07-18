import MarqueeText from "./MarqueeText.jsx";
import Project from "./Project";
import { motion } from "framer-motion";
import "../styles/projects.css";
export default function Projects() {
  const data = [
    {
      image: "/StronaPodKlucz/Realizacje/UCzecha.webp",
      title: "U Czecha",
      link: "https://u-czecha.pl",
      displayedLink: "U-czecha.pl",
      description:
        "Strona internetowa dla restauracji — zawiera menu, lokalizację, dane kontaktowe oraz opinie klientów.",
    },

    {
      image: "/StronaPodKlucz/Realizacje/Invoxly.webp",
      title: "Invoice Manager",
      link: "#",
      displayedLink: "#######",
      description:
        "Aplikacja webowa umożliwiająca irmom kontrolę nad wydatkami i zarządzanie fakturami w jednym miejscu.",
    },
  ];

  return (
    <motion.section className="projects">
      <MarqueeText>Portfolio</MarqueeText>
      {data.map((project) => (
        <Project info={project} />
      ))}
    </motion.section>
  );
}
