import "../styles/landing.css";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import SlidingText from "./SlidingText";
import {
  ChevronsUp,
  MonitorSmartphone,
  Brush,
  CircleQuestionMark,
  Users,
  MailCheck,
  ScreenShare,
  ArrowDown,
  AppWindow,
  Laptop,
  Smartphone,
} from "lucide-react";
import ScrollableContainer from "./ScrollableContainer";
export default function Landing() {
  const badge_color = "rgb(106, 255, 95)";
  const badge_size = 25;
  const badges = [
    <>
      <ChevronsUp stroke={badge_color} size={badge_size} /> Szybko działająca
    </>,
    <>
      <MonitorSmartphone stroke={badge_color} size={badge_size} /> Responsywna
    </>,
    <>
      <Brush stroke={badge_color} size={badge_size} /> Estetyczna
    </>,
    <>
      <CircleQuestionMark stroke={badge_color} size={badge_size} /> Przemyślana
    </>,
    <>
      <Users stroke={badge_color} size={badge_size} /> Przyjazna dla użytkownika
    </>,
  ];

  return (
    <section className="landing">
      <div style={{ position: "absolute", left: -50, top: 150 }}>
        <ScrollableContainer
          initialX={[-50, 50]}
          initialY={[-10, 20]}
          initialscale={[0.8, 1]}
          initialRotation={[150, -50]}
        >
          <Laptop size={90} stroke="rgb(148, 255, 109)" strokeWidth={0.9} />
        </ScrollableContainer>
      </div>
      <p style={{ position: "absolute", color: "gray" }}>strona w budowie</p>

      <div style={{ position: "absolute", right: -50, top: 250 }}>
        <ScrollableContainer
          initialX={[50, -50]}
          initialY={[-10, 20]}
          initialscale={[0.8, 1]}
          initialRotation={[-10, 80]}
        >
          <Smartphone size={90} stroke="rgb(92, 254, 113)" strokeWidth={0.9} />
        </ScrollableContainer>
      </div>
      <br></br>
      <motion.h1 className="landing_title">Strona Pod Klucz</motion.h1>
      <h2 className="landing_subtitle">
        Tworzę <SlidingText inputs={["nowoczesne", "szybkie", "piękne"]} />{" "}
        strony internetowe dla małych firm i freelancerów.
      </h2>
      <p className="landing_description">
        Szybkie, responsywne i dopasowane do Twoich potrzeb. Każdą stronę tworzę
        ręcznie, pisząc kod od zera – bez szablonów i kreatorów. Dzięki temu
        Twoja strona jest unikalna, szybka i idealnie dopasowana.
      </p>
      <br></br>
      <div className="landing_badges_container">
        <div className="landing_badges">
          {badges.map((badge) => (
            <span className="landing_badge">{badge}</span>
          ))}
        </div>
        <div className="landing_badges">
          {badges.map((badge) => (
            <span className="landing_badge">{badge}</span>
          ))}
        </div>
      </div>
      <div className="landing_buttons">
        <CtaButton
          gradient={false}
          style={{ padding: "20px 40px", height: "50px" }}
          content={
            <>
              Wyślij mi wiadomość
              <MailCheck />
            </>
          }
        ></CtaButton>

        <CtaButton
          content={
            <>
              Zobacz moje projekty <ScreenShare />
            </>
          }
          style={{ padding: "20px 40px", height: "50px" }}
          gradient={true}
        />
      </div>
      <div className="lading_scroll">
        <p className="landing_scroll_p">Przewiń</p>
        <motion.div
          className="landing_scroll_arrow"
          animate={{ y: [-5, 5] }}
          transition={{
            type: "tween",
            ease: "circInOut",
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown stroke="rgba(255, 255, 255, 0.389)" />
        </motion.div>
      </div>
    </section>
  );
}
