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
  return (
    <section className="engage_box">
      <div className="engage_box_content">
        <RiseText>ZAINTERESOWAY</RiseText>
        <RiseText>Ofertą?</RiseText>
        <br></br>
        <br></br>
        <CtaButton
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
