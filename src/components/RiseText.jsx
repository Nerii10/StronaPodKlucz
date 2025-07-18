import ScrollableContainer from "./ScrollableContainer";
import "../styles/risetext.css";
export default function RiseText({ children }) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="risetext_container">
      {children.split("").map((letter) => {
        const Y = getRandomInt(100, 200);
        const X = getRandomInt(-10, 10);
        const Rotation = getRandomInt(-50, 50);
        const Scale = getRandomInt(9, 10) / 10;
        return (
          <ScrollableContainer
            damping={23}
            offset={["start end", "start center"]}
            initialY={[Y, 0]}
            initialRotation={[Rotation, 0]}
            initialscale={[Scale, 1]}
            initialX={[X, 0]}
          >
            <h2 style={{ margin: 0 }}>{letter.toUpperCase()}</h2>
          </ScrollableContainer>
        );
      })}
    </div>
  );
}
