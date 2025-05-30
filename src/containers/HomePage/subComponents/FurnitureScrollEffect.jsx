import React, { useEffect, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, useGLTF } from "@react-three/drei";
import SectionHeading from "../../../common/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
// Chair Component
const ChairModel = () => {
  const { scene } = useGLTF("/designer_chair_02a.glb");
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
      scale={[2.5, 2.5, 2.5]}
      position={[-3.3, -1, 0]} // Shift left
    />
  );
};

// Sofa Component
const SofaModel = () => {
  const { scene } = useGLTF("/3d_pbr_curved_sofa.glb");
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
      scale={[1.4, 1.4, 1.4]}
      position={[1, 0, 0]} // Shift right
    />
  );
};

// Main Component
const FurnitureScrollEffect = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      style={{
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SectionHeading title="Modern" subtitle="Best Sellers" />

      {/* This wrapper will have hidden scrollbar */}
      <div
        style={{
          width: "100vw",
          height: "90vh",
          position: "relative",
          overflow: "hidden", // Prevents scrollbar appearance outside
        }}
      >
        {/* Scrollable container with hidden scrollbar */}
        <div
          style={{
            width: "100%",
            height: "100%",
            overflowY: "scroll", // Enables scrolling inside
            overflowX: "hidden",
            scrollbarWidth: "thin", // Firefox (makes it thin)
            scrollbarColor: "transparent transparent", // Firefox (hides it)
            msOverflowStyle: "none", // IE/Edge
          }}
          className="scroll-container"
        >
          {/* Hide scrollbar for Webkit (Chrome/Safari) */}
          <style>
            {`
              .scroll-container::-webkit-scrollbar {
                width: 8px; /* Thin scrollbar */
              }
              .scroll-container::-webkit-scrollbar-track {
                background: #ffffff; /* Make track invisible */
              }
              .scroll-container::-webkit-scrollbar-thumb {
                background: #ffffff; /* Almost transparent scrollbar */
                border-radius: 4px;
              }
              .scroll-container::-webkit-scrollbar-thumb:hover {
                background:#ffffff 
              }
            `}
          </style>

          {/* Canvas & Scroll Controls */}
          <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[2, 5, 5]} intensity={1} />
            <ScrollControls pages={2} damping={0.3}>
              {/* Objects inside ScrollControls */}
              <ChairModel />
              <SofaModel />
            </ScrollControls>
          </Canvas>
        </div>
      </div>
    </div>
  );
};
export default memo(FurnitureScrollEffect);
