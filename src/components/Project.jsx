import { ArrowUpRightSquare } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Project({ info }) {
  const [hover, setHover] = useState(false);
  console.log(info)
  return (
    <motion.section
      className="project_card"
      onHoverEnd={() => {
        setHover(false);
      }}
      onHoverStart={() => {
        setHover(true);
      }}
    >
      <div className="project_hero">
        <motion.img
          src={info?.image}
          className="project_hero_image"
          animate={hover ? { y: 7 } : { y: 20 }}
          transition={{ type: "spring", damping: 18 }}
        />
        <a href={info?.link}>
          <motion.div
            className="project_hero_link"
            animate={{ y: hover ? 5 : 0 }}
            transition={{
              type: "spring",
            }}
          >
            <a>
              <motion.div
                animate={hover ? { rotate: 90 } : { rotate: 0 }}
                transition={{ type: "spring" }}
                className="project_hero_link_icon"
                style={{
                  height: "fit-content",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <ArrowUpRightSquare />
              </motion.div>
              {info?.displayedLink}
            </a>
          </motion.div>
        </a>
      </div>
      <div className="project_title">
        <h2>{info?.title}</h2>
        <br></br>
        <div className="project_badges">
          <p>{info?.description}</p>
        </div>
      </div>
      <div className="project_controlls"></div>
    </motion.section>
  );
}
