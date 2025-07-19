import "../styles/footer.css";
import {
  Mail,
  MapPin,
  Copyright,
  Target,
  Milestone,
  Circle,
} from "lucide-react";
import ScrollableContainer from "./ScrollableContainer";
export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - 250; // ⬅️ odstęp od góry
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="footer">
      <div className="footer_sign">
        <Milestone size={30} />
      </div>
      <div style={{ position: "absolute", right: 0, top: -69 }}>
        <ScrollableContainer
          initialX={[0, -300]}
          initialY={[0, 0]}
          initialscale={[0.6, 0.6]}
          initialRotation={[150, -50]}
        >
          <Circle size={90} stroke="rgb(58, 134, 30)" strokeWidth={0.9} />
        </ScrollableContainer>
      </div>
      <div className="footer_bottom_hr"></div>
      <div className="footer_top">
        <div className="footer_section">
          <h2>Strona Pod Klucz</h2>
          <p>
            Tworzymy profesjonalne strony internetowe szyte na miarę Twoich
            potrzeb — nowoczesne, responsywne i łatwe w obsłudze.
          </p>
        </div>

        <div className="footer_section">
          <h2>Kontakt</h2>
          <a className="footer_mailto" href="mailto:stronapodklucz10@gmail.com">
            <Mail />
            stronapodklucz10@gmail.com
          </a>
          <a>
            <MapPin />
            Polska
          </a>
        </div>

        <div className="footer_section">
          <h2>Sekcje</h2>
          <ul>
            {["Usługi", "Realizacje", "Kontakt"].map((section) => (
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  scrollToSection(section);
                }}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_hr2"></div>
        <div className="footer_content">
          <a>
            <Copyright stroke="rgb(189, 255, 157)" />
            2025 Strona Pod Klucz.
          </a>
          <a>
            <Target stroke="rgb(255, 157, 157)" />
            Rozwiązania które działają.
          </a>
        </div>
      </div>
    </section>
  );
}
