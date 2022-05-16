import React from "react";
import "./styles.css";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const styles = useSpring({
    from: {
      opacity: 0,
      color: "pink",
      transform: "translateY(20px) scale(0.8)"
    },
    to: {
      opacity: 1,
      color: "blue",
      transform: "translateY(0px) scale(0.8)"
    }
  });

  return (
    <div className="App">
      <animated.h1 style={styles}>Hello CodeSandbox</animated.h1>
    </div>
  );
}
