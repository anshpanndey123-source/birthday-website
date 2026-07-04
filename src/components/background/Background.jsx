import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import "./Background.css";
import Scene from "./Scene";

const Background = () => {
  return (
    <div className="background">

      <div className="gradient-layer"></div>

      <div className="nebula nebula1"></div>
      <div className="nebula nebula2"></div>
      <div className="nebula nebula3"></div>

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      <div className="glow glow3"></div>

      <div className="top-light"></div>

        <div className="bottom-glow"></div>

        <div className="light-rays"></div>

        <div className="aurora"></div>

        <div className="fog"></div>

        <div className="hero-spotlight"></div>

        <div className="purple-overlay"></div>

        <div className="twinkle-stars">
        {[...Array(80)].map((_, i) => (
            <span
            key={i}
            className="twinkle-star"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
            }}
            />
        ))}
        </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="noise"></div>

    </div>
  );
};

export default Background;