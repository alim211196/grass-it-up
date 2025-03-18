import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, useGLTF } from "@react-three/drei";

const ChairModel = () => {
  const { scene } = useGLTF("/spanish_dining_chair.glb");
  const chairRef = useRef();
  const scroll = useScroll();
  const [spinCompleted, setSpinCompleted] = useState(false);

  useFrame(() => {
    if (chairRef.current) {
      const spinProgress = Math.min(scroll.offset * 4, 1); // Complete spin first
      chairRef.current.rotation.y = spinProgress * Math.PI * 2; // Rotate smoothly

      if (spinProgress >= 1 && !spinCompleted) {
        setSpinCompleted(true); // Mark spin as complete
      }

      // Move chair downward only after spin completes
      if (spinCompleted) {
        const moveProgress = Math.max(0, scroll.offset - 0.25) * 2;
        chairRef.current.position.y = 1 - moveProgress * 2;
      }
    }
  });

  return (
    <primitive
      object={scene}
      ref={chairRef}
      scale={[2, 2, 2]}
      position={[0, 0, 0]} // Center the model
    />
  );
};

const FurnitureScrollEffect = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "200vh", // Two pages for scrolling effect
        position: "relative",
      }}
    >
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ScrollControls pages={2} damping={0.3}>
          <ChairModel />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default FurnitureScrollEffect;
