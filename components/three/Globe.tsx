"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line, QuadraticBezierLine, Html } from "@react-three/drei";
import { Car, Truck, Bike } from "lucide-react";
import * as THREE from "three";

// Helper to convert lat/lon to 3D position
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// Pakistan coordinates (approx center)
const PAKISTAN_LAT = 30.3753;
const PAKISTAN_LON = 69.3451;
const GLOBE_RADIUS = 2;

// Generate random tracking points around the globe but clustered more near Pakistan
const generatePoints = (count: number, radius: number) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    // 50% global, 50% regional (around Pakistan)
    let lat, lon;
    if (Math.random() > 0.5) {
      lat = PAKISTAN_LAT + (Math.random() - 0.5) * 40;
      lon = PAKISTAN_LON + (Math.random() - 0.5) * 40;
    } else {
      lat = (Math.random() - 0.5) * 160;
      lon = (Math.random() - 0.5) * 360;
    }
    
    points.push({
      position: latLonToVector3(lat, lon, radius),
      id: i,
      size: Math.random() * 0.03 + 0.01,
      color: Math.random() > 0.8 ? "#ef4444" : "#22c55e", // Some red (alerts), mostly green
    });
  }
  return points;
};

// Generate arcs connecting Pakistan to other points
const generateArcs = (count: number, radius: number) => {
  const arcs = [];
  const start = latLonToVector3(PAKISTAN_LAT, PAKISTAN_LON, radius);
  
  for (let i = 0; i < count; i++) {
    const lat = (Math.random() - 0.5) * 160;
    const lon = (Math.random() - 0.5) * 360;
    const end = latLonToVector3(lat, lon, radius);
    
    // Calculate mid point for curve - push it out further than radius
    const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.5);
    
    arcs.push({
      start,
      end,
      mid,
      id: i,
      // Assign a vehicle type to some arcs (approx 50%)
      vehicleType: i % 2 === 0 ? (Math.random() > 0.6 ? 'truck' : Math.random() > 0.5 ? 'bike' : 'car') : null,
      speed: Math.random() * 0.003 + 0.001,
    });
  }
  return arcs;
};

// Component for a moving vehicle along a path
const MovingVehicle = ({ start, end, mid, type, speed = 0.002 }: { start: THREE.Vector3, end: THREE.Vector3, mid: THREE.Vector3, type: 'car' | 'truck' | 'bike', speed?: number }) => {
  const meshRef = useRef<THREE.Group>(null);
  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(start, mid, end), [start, mid, end]);
  const progress = useRef(Math.random()); // Random start position

  useFrame(() => {
    if (meshRef.current) {
      progress.current += speed;
      
      // Loop movement
      if (progress.current >= 1) {
        progress.current = 0;
      }

      const point = curve.getPoint(progress.current);
      meshRef.current.position.copy(point);
      
      // Look at next point to orient vehicle (if we add 3D models later)
      const lookAtPoint = curve.getPoint(Math.min(progress.current + 0.01, 1));
      meshRef.current.lookAt(lookAtPoint);
    }
  });

  const Icon = type === 'truck' ? Truck : type === 'bike' ? Bike : Car;
  const color = type === 'truck' ? '#3b82f6' : type === 'bike' ? '#eab308' : '#22c55e';
  const size = type === 'truck' ? 20 : type === 'bike' ? 14 : 16;

  return (
    <group ref={meshRef}>
      <Html center distanceFactor={15} style={{ pointerEvents: 'none' }}>
        <div 
          className="flex items-center justify-center rounded-full bg-slate-900/80 border border-white/20 p-1 shadow-[0_0_10px_rgba(34,197,94,0.3)] backdrop-blur-sm"
          style={{ color: color }}
        >
          <Icon size={size} strokeWidth={2.5} />
        </div>
      </Html>
    </group>
  );
};

export default function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const pointsData = useMemo(() => generatePoints(80, GLOBE_RADIUS), []);
  const arcsData = useMemo(() => generateArcs(12, GLOBE_RADIUS), []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Base Globe */}
      <Sphere args={[GLOBE_RADIUS, 64, 64]}>
        <meshStandardMaterial
          color="#0f172a" // Dark slate
          roughness={0.7}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Wireframe Grid */}
      <Sphere args={[GLOBE_RADIUS + 0.01, 32, 32]}>
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
          opacity={0.05}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[GLOBE_RADIUS + 0.2, 64, 64]}>
        <meshBasicMaterial
          color="#22c55e"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Tracking Points */}
      {pointsData.map((point) => (
        <mesh key={point.id} position={point.position}>
          <sphereGeometry args={[point.size, 8, 8]} />
          <meshBasicMaterial color={point.color} toneMapped={false} />
        </mesh>
      ))}

      {/* Connection Arcs */}
      {arcsData.map((arc) => (
        <group key={arc.id}>
          <QuadraticBezierLine
            start={arc.start}
            end={arc.end}
            mid={arc.mid}
            color={arc.vehicleType === 'truck' ? '#3b82f6' : arc.vehicleType === 'bike' ? '#eab308' : '#22c55e'}
            lineWidth={1}
            transparent
            opacity={0.2}
          />
          {/* Render Moving Vehicle if assigned */}
          {arc.vehicleType && (
            <MovingVehicle 
              start={arc.start} 
              end={arc.end} 
              mid={arc.mid} 
              type={arc.vehicleType as 'car' | 'truck' | 'bike'} 
              speed={arc.speed}
            />
          )}
        </group>
      ))}

      {/* HQ Marker with Label */}
      <group position={latLonToVector3(PAKISTAN_LAT, PAKISTAN_LON, GLOBE_RADIUS)}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>
        <Html distanceFactor={12}>
          <div className="flex items-center gap-2 bg-slate-900/90 text-white text-[10px] px-2 py-1 rounded-md border border-green-500/30 backdrop-blur-md shadow-lg shadow-green-500/20 whitespace-nowrap select-none pointer-events-none translate-y-[-20px]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono tracking-wider">HQ: ACTIVE</span>
          </div>
        </Html>
      </group>
    </group>
  );
}
