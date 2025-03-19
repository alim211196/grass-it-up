import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, useGLTF } from "@react-three/drei";
import SectionHeading from "./SectionHeading";

// Chair Component
const ChairModel = () => {
  const { scene } = useGLTF("/chair_free.glb");
  const chairRef = useRef();
  const scroll = useScroll(); // Get scroll instance inside ScrollControls

  useFrame(() => {
    if (chairRef.current) {
      const spinProgress = scroll.offset * Math.PI * 2; // Rotate smoothly with scroll
      chairRef.current.rotation.y = spinProgress;
    }
  });

  return (
    <primitive
      object={scene}
      ref={chairRef}
      scale={[0.45, 0.45, 0.45]}
      position={[-3, -2, 0]} // Shift left
    />
  );
};

// Sofa Component
const SofaModel = () => {
  const { scene } = useGLTF("/sofa.glb");
  const sofaRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (sofaRef.current) {
      const spinProgress = scroll.offset * Math.PI * 2;
      sofaRef.current.rotation.y = spinProgress;
    }
  });

  return (
    <primitive
      object={scene}
      ref={sofaRef}
      scale={[2.5, 2.5, 2.5]}
      position={[2, 0, 0]} // Shift right
    />
  );
};

// Main Component
const FurnitureScrollEffect = () => {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SectionHeading title="Modern" subtitle="Best Sellers" />

      {/* Hide scrollbar but allow vertical scrolling */}
      <div
        style={{
          width: "100vw",
          height: "90vh",
          position: "relative",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE/Edge
        }}
      >
        {/* Hide scrollbar for Webkit (Chrome/Safari) */}
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Canvas & Scroll Controls */}
        <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 5, 5]} intensity={1} />
          <ScrollControls pages={2} damping={0.3}>
            {/* Children inside ScrollControls to ensure visibility */}
            <ChairModel />
            <SofaModel />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
};

export default FurnitureScrollEffect;
