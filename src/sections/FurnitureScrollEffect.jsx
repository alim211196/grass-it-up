import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, useGLTF } from "@react-three/drei";
import SectionHeading from "./SectionHeading";

const ChairModel = () => {
  const { scene } = useGLTF("/chair_free.glb");
  const chairRef = useRef();
  const scroll = useScroll();
  const [rotationY, setRotationY] = useState(0);

  useFrame(() => {
    if (chairRef.current) {
      // Rotate chair smoothly based on scroll
      const spinProgress = scroll.offset * Math.PI * 2; // Adjust spin speed
      chairRef.current.rotation.y = spinProgress;
    }
  });

  // Handle hover-based spinning
  const handleMouseEnter = () => {
    setRotationY((prev) => prev + Math.PI / 4); // Rotate a bit on hover
  };

  return (
    <primitive
      object={scene}
      ref={chairRef}
      scale={[0.5, 0.5, 0.5]} // Small chair size
      position={[0, 0, 0]} // Fixed position in center
      rotation={[0, rotationY, 0]}
      onPointerEnter={handleMouseEnter} // Rotate slightly on hover
    />
  );
};

const FurnitureScrollEffect = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SectionHeading title="Top" subtitle="Trending" />
      <Canvas camera={{ position: [4, 4, 4] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <ScrollControls pages={1} damping={0.3}>
          <ChairModel />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default FurnitureScrollEffect;
