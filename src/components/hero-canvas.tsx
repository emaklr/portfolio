"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";

type HeroCanvasProps = {
  theme: "light" | "dark";
  active: boolean;
};

function OrbitalSculpture({ theme }: { theme: "light" | "dark" }) {
  const sculptureRef = useRef<Group>(null);
  const isDark = theme === "dark";
  const lime = "#B7FF36";
  const metal = isDark ? "#C8D2BD" : "#53634A";
  const core = isDark ? "#17241A" : "#DCE7CE";

  useFrame((state, delta) => {
    if (!sculptureRef.current) return;

    const targetY = state.pointer.x * 0.16 + 0.08;
    const targetX = -state.pointer.y * 0.12;

    sculptureRef.current.rotation.y +=
      (targetY - sculptureRef.current.rotation.y) *
      Math.min(delta * 2.2, 1);

    sculptureRef.current.rotation.x +=
      (targetX - sculptureRef.current.rotation.x) *
      Math.min(delta * 2.2, 1);
  });

  return (
    <Float
      speed={0.48}
      rotationIntensity={0.08}
      floatIntensity={0.1}
      floatingRange={[-0.045, 0.045]}
    >
      <group ref={sculptureRef}>
        <mesh rotation={[1.13, 0.28, -0.24]}>
          <torusGeometry args={[1.72, 0.018, 12, 180]} />
          <meshStandardMaterial
            color={lime}
            metalness={0.78}
            roughness={0.24}
            emissive={lime}
            emissiveIntensity={isDark ? 0.52 : 0.13}
          />
        </mesh>

        <mesh rotation={[0.5, 1.2, 0.5]}>
          <torusGeometry args={[2.02, 0.008, 8, 180]} />
          <meshStandardMaterial
            color={metal}
            metalness={0.72}
            roughness={0.35}
            transparent
            opacity={0.58}
          />
        </mesh>

        <mesh rotation={[-0.4, 0.18, 1.05]}>
          <torusGeometry args={[1.46, 0.006, 8, 160]} />
          <meshStandardMaterial
            color={lime}
            metalness={0.6}
            roughness={0.38}
            transparent
            opacity={isDark ? 0.56 : 0.34}
            emissive={lime}
            emissiveIntensity={isDark ? 0.3 : 0.06}
          />
        </mesh>

        <mesh position={[1.58, 0.48, 0.18]}>
          <sphereGeometry args={[0.105, 24, 24]} />
          <meshStandardMaterial
            color={lime}
            emissive={lime}
            emissiveIntensity={isDark ? 1.5 : 0.35}
            metalness={0.45}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[-1.54, -0.56, -0.12]}>
          <sphereGeometry args={[0.055, 18, 18]} />
          <meshStandardMaterial
            color={metal}
            metalness={0.8}
            roughness={0.22}
          />
        </mesh>

        <mesh>
          <icosahedronGeometry args={[0.48, 4]} />
          <meshPhysicalMaterial
            color={core}
            metalness={0.72}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.14}
            emissive={isDark ? "#294329" : "#EFF8E5"}
            emissiveIntensity={isDark ? 0.32 : 0.08}
          />
        </mesh>

        <mesh scale={0.84}>
          <icosahedronGeometry args={[0.48, 4]} />
          <meshStandardMaterial
            color={lime}
            wireframe
            transparent
            opacity={isDark ? 0.3 : 0.18}
            metalness={0.4}
            roughness={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCanvas({ theme, active }: HeroCanvasProps) {
  const isDark = theme === "dark";

  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      dpr={[1, 1.3]}
      frameloop={active ? "always" : "never"}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
        stencil: false,
        depth: true,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={isDark ? 0.85 : 1.25} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={isDark ? 1.7 : 1.35}
        color={isDark ? "#E7F4DE" : "#FFFFFF"}
      />
      <pointLight
        position={[-3, -2, 2]}
        color="#B7FF36"
        intensity={isDark ? 2.3 : 0.9}
        distance={7}
      />
      <pointLight
        position={[2, 1, -2]}
        color={isDark ? "#7C9B6B" : "#D2E4BA"}
        intensity={0.8}
        distance={6}
      />
      <OrbitalSculpture theme={theme} />
    </Canvas>
  );
}
