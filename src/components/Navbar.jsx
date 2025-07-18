import "../styles/navbar.css";
import { ChevronsRight } from "lucide-react";
import { motion, scale } from "framer-motion";
import CtaButton from "./CtaButton";
export default function Navbar({ mobile }) {
  const sections = ["Usługi", "Realizacje", "Kontakt"];

  if (!mobile) {
    return (
      <>
        <nav className="navbar">
          <img
            src="/StronaPodKlucz/Logo/Logo_key_White_Large.webp"
            className="navbar_logo"
          ></img>

          <div className="navbar_services">
            {sections.map((section) => (
              <p className="navbar_service">{section}</p>
            ))}
          </div>

       
          
        </nav>
        <div style={{ height: "100px" }}></div>
      </>
    );
  } else {
    return (
      <nav className="navbar">
        <a href="/" className="navbar_logo">
          Logo
        </a>

        <button
          className="navbar_hamburger"
          aria-expanded="false"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
        >
          Menu Hamburger
        </button>

        <div className="navbar_menu" hidden>
          Rozsuwane menu z opcjami typu kontakt number i sekcje strony
        </div>
      </nav>
    );
  }
}
