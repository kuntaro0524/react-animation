import React from "react";
import "./styles.css";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  return (
    <div className="App">
      <animated.h1 style={styles}>Hello CodeSandbox</animated.h1>
    </div>
  );
}

const Card = styled("div")({
  width: 500,
  height: 300,
  backgroundColor: "pink"
});
