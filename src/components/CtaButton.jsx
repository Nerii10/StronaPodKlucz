import { motion } from "framer-motion";
import "../styles/ctabutton.css";
import { head } from "framer-motion/client";

export default function CtaButton({ content, style, onClick, gradient }) {
  return (
    <motion.button
      onClick={() => onClick()}
      className="ctabutton"
      style={
        gradient
          ? { ...style }
          : {
              ...style,
              border: "1px rgba(255, 255, 255, 0.43) solid",
              backgroundColor: "rgba(45, 45, 45, 0.51)",
            }
      }
      initial={
        gradient
          ? {
              background:
                "linear-gradient(150deg, rgb(37, 248, 47) 0%, rgb(7, 21, 1))",
              backgroundClip: "padding-box",
            }
          : {}
      }
      whileHover={{
        ...(gradient && {
          background:
            "linear-gradient(66deg, rgb(36, 201, 45) 50%, rgb(17, 75, 23))",
          backgroundClip: "padding-box",
        }),
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ ease: "circOut", duration: 0.5 }}
    >
      {content ? content : "brak opisu"}
    </motion.button>
  );
}
