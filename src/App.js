import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const [flipped, setFlipped] = useState(false);

  // アニメーションをつけるよ
  const styles = useSpring({
    opacity: flipped ? 1 : 0,
    rotateY: flipped ? "180deg" : "0deg",
  });

  return (
    <div
      className="App"
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: "500px",
      }}
    >
      <Card style={styles} />
      <BlueCard
        // ピンクのやつと青いやつを逆の透明度をもたせるためにstyleをいじる
        style={{
          opacity: styles.opacity.to((o) => 1 - o),
          rotateY: styles.rotateY,
        }}
      />
    </div>
  );
}

const Card = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundColor: "pink",
  borderRadius: "30px",
  backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
});

const BlueCard = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundColor: "skyblue",
  borderRadius: "30px",
  backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
});
