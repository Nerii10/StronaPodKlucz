import {
  Clock,
  Wallet,
  Brush,
  MonitorSmartphone,
  HelpingHandIcon,
  Code2Icon,
  Search,
} from "lucide-react";
import "../styles/service.css";
import MarqueeText from "./MarqueeText";
export default function Service() {
  return (
    <section className="service_container">
      <div className="service_card">
        <h2>Strona Internetowa</h2>
        <div
          className="form_circle"
          style={{ left: "-125px", top: "-125px", zIndex: -1 }}
        ></div>
        <div
          className="form_circle"
          style={{ right: "-125px", bottom: "-125px", zIndex: -1 }}
        ></div>
        <div className="service_list">
          <div className="service_price_box">
            <p className="new_price">
              <Wallet />
              od 1499 zł
            </p>
            <p className="service_time">
              <Clock />
              1–2 tygodnie
            </p>
          </div>
          {[
            <>
              <Code2Icon size={25} />
              Stronę tworzoną od podstaw, bez szablonów
            </>,
            <>
              <HelpingHandIcon size={25} />
              Pomoc w uruchomieniu hostingu i domeny
            </>,
            <>
              <Search size={25} />
              Podstawowe SEO
            </>,
            <>
              <Brush size={25} />
              Unikalny design dopasowany do branży i preferencji
            </>,
            <>
              <MonitorSmartphone size={25} />
              Responsywny i czytelny układ na każdym urządzeniu
            </>,
          ].map((children) => (
            <p className="service_badge">{children}</p>
          ))}

          {/* <p className="service_types">
            Typy stron: strony wizytówki, strony firmowe, portfolio, menu
            restauracji, landing page, cenniki i inne – bez sklepów i systemów
            rezerwacji.
          </p> */}
        </div>
      </div>

      <div className="service_card">
        <h2>Kim jestem?</h2>
        <div className="service_list">
          Nazywam się Mikołaj, mam 19 lat i tworzę nowoczesne strony internetowe
          dopracowane w każdym szczególe. Od kilku lat rozwijam się w
          programowaniu.
          {/* <p className="service_types">
            Typy stron: strony wizytówki, strony firmowe, portfolio, menu
            restauracji, landing page, cenniki i inne – bez sklepów i systemów
            rezerwacji.
          </p> */}
        </div>
      </div>
    </section>
  );
}
