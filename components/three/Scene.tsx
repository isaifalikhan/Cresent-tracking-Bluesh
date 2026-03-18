"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Globe from "./Globe";

export default function Scene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && theme === "light";
  const ambientIntensity = isLight ? 1.4 : 0.5;
  const pointIntensity = isLight ? 2.2 : 1;
  const directionalIntensity = isLight ? 3 : 2;
  const shadowOpacity = isLight ? 0.15 : 0.4;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={ambientIntensity} />
          <pointLight position={[10, 10, 10]} intensity={pointIntensity} />
          <Globe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <directionalLight position={[5, 5, 5]} intensity={directionalIntensity} />
          <ContactShadows position={[0, -2.5, 0]} opacity={shadowOpacity} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
