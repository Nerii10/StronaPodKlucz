import { useState } from "react";
import "../styles/contact.css";
import { AnimatePresence, motion, scale } from "framer-motion";
import {
  User,
  Mail,
  MessageCircle,
  AlignLeft,
  Send,
  Loader,
  Check,
  Clock,
  Laptop,
  SendHorizonal,
  Circle,
} from "lucide-react";

import ScrollableContainer from "./ScrollableContainer";
import CtaButton from "./CtaButton";
import RiseText from "./RiseText";

export default function Contact() {
  const iconSize = 20;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
  });
  const form = [
    {
      label: (
        <>
          <User size={iconSize} />
          Imię i nazwisko
        </>
      ),
      key: "name",
      type: "text",
    },
    {
      label: (
        <>
          <Mail size={iconSize} />
          Email
        </>
      ),
      type: "email",
      key: "email",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("type", formData.type);
    setLoading(true);
    const res = await fetch(
      "https://formsubmit.co/ajax/stronapodklucz10@gmail.com",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    if (res.ok) {
      setFormData({ name: "", email: "", message: "", type: "" });
      setSent(true);
      setTimeout(() => {
        console.log(formData);
        setSent(false);
        setLoading(false);
      }, [1000]);
    }
  };

  return (
    <>
      <RiseText>kontakt</RiseText>
      <section className="contact"  id="Kontakt">
        <div style={{ position: "absolute", left: 0, top: 150 }}>
          <ScrollableContainer>
            <Circle size={100} />
          </ScrollableContainer>
        </div>

        <div style={{ position: "absolute", right: 0, top: 400 }}>
          <ScrollableContainer initialY={[-100, 100]}>
            <Circle size={100} />
          </ScrollableContainer>
        </div>

        <section className="contact_direct">
          <h2 className="contact_direct_title">Bezpośredni kontakt</h2>
          <p className="contact_direct_paragraph">
            Jeśli wolisz kontakt bezpośredni, napisz śmiało, z przyjemnością
            odpowiem na wiadomość.
          </p>

          <div className="contact_mail">
            <div className="contact_mail_left">
              <Mail size={30} />
            </div>
            <div className="contact_mail_right">
              {" "}
              <div className="mail_badge">
                <h2>E-mail</h2>
              </div>
              <p className="contact_mail_paragraph">Odpowiedź w ciągu 24h</p>
              <a
                className="contact_mail_mailto"
                href="mailto:stronapodklucz10@gmail.com"
              >
                stronapodklucz10@gmail.com
              </a>
            </div>
          </div>
        </section>
        <form className="form" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {(loading || sent) && (
              <motion.div
                className="form_loading"
                initial={{ opacity: 0 }}
                animate={loading && { opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "circIn", duration: 0.3 }}
              >
                {!sent ? (
                  <Loader size={40} className="form_loader" />
                ) : (
                  <Check size={40} />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="form_title">
            <h2 className="form_title_header">Formularz kontaktowy</h2>
            <p className="form_title_paragraph">
              Złożenie formularza nie wiąże się z żadnym zobowiązaniem – pozwala
              jedynie na otrzymanie niezobowiązującej informacji.
            </p>
          </div>

          <div
            className="form_circle"
            style={{ left: "-125px", top: "-125px" }}
          ></div>
          <div
            className="form_circle"
            style={{ left: "205px", bottom: "-125px" }}
          ></div>

          {form.map((section) => (
            <>
              <div className="form_input_container">
                <p
                  className={
                    formData?.[section.key]
                      ? "form_input_label_hidden"
                      : "form_input_label"
                  }
                >
                  {section.label}
                </p>
                <input
                  className="form_input"
                  required
                  value={formData?.[section.key] || ""}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      [section.key]: e.target.value,
                    }));
                  }}
                  type={section.type}
                />
              </div>
            </>
          ))}

          <div className="form_input_container">
            <select
              className="form_input"
              value={formData.type}
              required
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, type: e.target.value }));
              }}
            >
              <option value={""} hidden>
                Wybierz rodzaj pytania
              </option>
              <option value={"Strona internetowa"}>Strona internetowa</option>
              <option value={"Konsultacja"}>Konsultacja</option>
              <option value={"Inne"}>Inne</option>
            </select>
          </div>

          <div className="form_input_container">
            <p
              className={
                formData.message
                  ? "form_input_label_hidden"
                  : "form_input_label"
              }
              style={{ top: 15 }}
            >
              <MessageCircle size={iconSize} />
              Twoja Wiadomość
            </p>

            <textarea
              className="form_input"
              required
              rows={4}
              value={formData?.message || ""}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  message: e.target.value,
                }));
              }}
              style={{
                resize: "none",
                height: "125px",
              }}
            ></textarea>
          </div>

          <div className="form_input_container_clear">
            <CtaButton
              content={
                <>
                  <Send size={iconSize} />
                  Wyślij wiadomość
                </>
              }
              style={{
                padding: "20px 30px",
                height: "50px",
                width: "fit-content",
                borderRadius: "10px",
              }}
              gradient={true}
            />
          </div>
        </form>
      </section>
    </>
  );
}
