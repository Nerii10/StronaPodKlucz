import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import "../styles/marqueetext.css";

export default function MarqueeText({ children, initialX = [0, -250], style }) {
  const repeatedText = Array.from({ length: 15 }, () => children);

  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 35 });
  const x = useTransform(smoothProgress, [0, 1], initialX);

  return (
    <section className="marquee_text_container" ref={contentRef}>
      {repeatedText.map((text, i) => (
        <motion.h2 style={{ ...style, x }} key={i}>
          {text}
        </motion.h2>
      ))}
    </section>
  );
}
