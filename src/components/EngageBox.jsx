import "../styles/engagebox.css";
import {
  CircleQuestionMarkIcon,
  Monitor,
  Star,
  Check,
  MailCheck,
} from "lucide-react";
import ScrollableContainer from "./ScrollableContainer";
import RiseText from "./RiseText";
import CtaButton from "./CtaButton";
export default function EngageBox() {
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
    <section className="engage_box">
      <div className="engage_box_content">
        <RiseText style={{ fontSize: "var(--fixed_font_size)" }}>
          ZAINTERESOWANY
        </RiseText>
        <RiseText style={{ fontSize: "var(--fixed_font_size)" }}>
          Ofertą?
        </RiseText>
        <br></br>
        <br></br>
        <CtaButton
          onClick={() => {
            scrollToSection("Kontakt");
          }}
          gradient={false}
          style={{
            padding: "20px 40px",
            height: "50px",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
          }}
          content={
            <>
              Wyślij mi wiadomość
              <MailCheck />
            </>
          }
        ></CtaButton>
      </div>
    </section>
  );
}
