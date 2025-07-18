import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollableContainer({
  isMobile,
  containerRef,
  children,
  style,
  initialopacity = [1, 1],
  initialscale = [0.9, 1],
  initialY = [100, -100],
  initialX = [10, -10],
  damping = 30,
  initialRotation = [10, -10],
  offset = ["start end", "start start"],
}) {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    container: isMobile ? containerRef : undefined,
    target: contentRef,
    offset: offset,
  });
  const smoothProgress = useSpring(scrollYProgress, { damping: damping });
  const opacity = useTransform(smoothProgress, [0, 1], initialopacity);
  const scale = useTransform(smoothProgress, [0, 1], initialscale);
  const y = useTransform(smoothProgress, [0, 1], initialY);
  const x = useTransform(smoothProgress, [0, 1], initialX);
  const rotate = useTransform(smoothProgress, [0, 1], initialRotation);
  return (
    <motion.div
      ref={contentRef}
      style={{
        ...style,
        scale,
        y,
        rotate,
        x,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
}
