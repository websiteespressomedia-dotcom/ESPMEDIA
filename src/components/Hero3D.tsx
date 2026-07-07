"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          color="#ffffff"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function InnerWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.15;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={0.9}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function ParticleRing() {
  const count = 1000;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      const r = 2.5 + Math.random() * 0.5;
      
      // Keep them somewhat in a ring shape
      p[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      p[i * 3 + 1] = (Math.random() - 0.5) * 1.5; // slight height variation
      p[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi);
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <CoreSphere />
        <InnerWireframe />
        <ParticleRing />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
