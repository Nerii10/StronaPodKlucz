import "../styles/navbar.css";
import { ChevronsRight, Minus } from "lucide-react";
import { motion, scale } from "framer-motion";
import CtaButton from "./CtaButton";
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const sections = ["Usługi", "Realizacje", "Kontakt"];

  const [mobile, setMobile] = useState(window.innerWidth <= 800);
  const [open, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const contentRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setOpen(false);
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - 250; // ⬅️ odstęp od góry
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open && contentRef.current) {
      setMenuHeight(contentRef.current.scrollHeight + 80);
    }
  }, [open]);

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
              <motion.p
                className="navbar_service"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "circOut", duration: 0.5 }}
                onClick={() => {
                  scrollToSection(section);
                }}
              >
                {section}
              </motion.p>
            ))}
          </div>
        </nav>
        <div style={{ height: "100px" }}></div>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar_mobile">
          <div className="navbar_mobile_top">
            <img
              src="/StronaPodKlucz/Logo/Logo_key_White_Large.webp"
              className="navbar_logo_mobile"
            ></img>

            <button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="navbar_mobile_hamburger_button"
            >
              <motion.div
                className="navbar_hamburger_part"
                animate={open ? { y: 0, rotate: 45, x: -1 } : { y: 6 }}
              >
                <Minus stroke="white" size={40} strokeWidth={2} />
              </motion.div>

              <motion.div
                className="navbar_hamburger_part"
                animate={open ? { y: 0, rotate: -45 } : { y: -6 }}
              >
                <Minus stroke="white" size={40} strokeWidth={2} />
              </motion.div>
            </button>
          </div>

          <motion.div
            ref={contentRef}
            className="navbar_services_mobile"
            initial={{ height: "0px", padding: "0px 20px" }}
            animate={
              open
                ? { height: menuHeight, padding: "40px 20px" }
                : { height: "0px", padding: "0px 20px" }
            }
            transition={{ type: "spring", damping: 23 }}
          >
            {sections.map((section) => (
              <motion.p
                className="navbar_service_mobile"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "circOut", duration: 0.5 }}
                onClick={() => {
                  scrollToSection(section);
                }}
              >
                {section}
              </motion.p>
            ))}
          </motion.div>
        </nav>
        <div style={{ height: "100px" }}></div>
      </>
    );
  }
}
