import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const [flipped, setFlipped] = useState(false);

  const styles = useSpring({
    opacity: flipped ? 1 : 0
  });
  return (
    <div className="App" onClick={() => setFlipped(!flipped)}>
      <Card style={styles} />
      <BlueCard style={styles} />
    </div>
  );
}

const Card = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundColor: "pink"
});

const BlueCard = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundColor: "skyblue"
});
