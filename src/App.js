import React from "react";
import "./styles.css";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const styles = useSpring({
    from: {
      opacity: 0,
      color: "pink",
      y: "20px",
      scale: "0.5"
    },
    to: {
      opacity: 1,
      color: "blue",
      y: "100px",
      scale: "1.0"
    }
  });

  return (
    <div className="App">
      <animated.h1 style={styles}>Hello CodeSandbox</animated.h1>
    </div>
  );
}
