import React from "react";
import "./styles.css";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  return (
    <div className="App">
      <Card />
      <BlueCard />
    </div>
  );
}

const Card = styled("div")({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundColor: "pink"
});

const BlueCard = styled("div")({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundColor: "skyblue"
});
