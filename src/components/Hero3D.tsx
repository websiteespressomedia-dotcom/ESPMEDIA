"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Points,
  PointMaterial,
  Text,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";

// 360 Marketing Concept: A solid core (Brand) surrounded by orbiting rings (360 Reach) and floating elements (Creativity)
function BrandCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  
  const { mouse, viewport } = useThree();
  
  useFrame((state, delta) => {
    // Interactive mouse follow for the whole group
    const targetX = 3.5 + (mouse.x * viewport.width) / 15; 
    const targetY = (mouse.y * viewport.height) / 15;
    
    // Core rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.15;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }

    // Orbiting rings (360 Marketing Channels)
    if (ring1Ref.current && ring2Ref.current && ring3Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.5;
      ring1Ref.current.rotation.y += delta * 0.2;
      
      ring2Ref.current.rotation.y += delta * 0.4;
      ring2Ref.current.rotation.z += delta * 0.3;
      
      ring3Ref.current.rotation.x += delta * 0.3;
      ring3Ref.current.rotation.z -= delta * 0.4;

      // Group position sync with core
      ring1Ref.current.position.copy(meshRef.current?.position || new THREE.Vector3());
      ring2Ref.current.position.copy(meshRef.current?.position || new THREE.Vector3());
      ring3Ref.current.position.copy(meshRef.current?.position || new THREE.Vector3());
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[3.5, 0, 0]} scale={1}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.1}
            anisotropy={0.5}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.2}
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      {/* 360 Orbiting Rings */}
      <mesh ref={ring1Ref} position={[3.5, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} />
      </mesh>
      <mesh ref={ring2Ref} position={[3.5, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref} position={[3.5, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.6, 0.01, 16, 100]} />
        <meshStandardMaterial color="#c4b5fd" transparent opacity={0.5} />
      </mesh>
    </>
  );
}

function FloatingIcons() {
  // Representing creative assets / metrics floating around
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.05;
      const targetX = 3.5 + (mouse.x * viewport.width) / 20; 
      const targetY = (mouse.y * viewport.height) / 20;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.02;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[3.5, 0, 0]}>
      {/* Triangle - Design */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[2, 2, 1]} scale={0.2}>
          <coneGeometry args={[1, 2, 3]} />
          <meshStandardMaterial color="#818cf8" wireframe />
        </mesh>
      </Float>
      {/* Sphere - Global reach */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, -1.5, 2]} scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#c4b5fd" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      {/* Box - Structure/Strategy */}
      <Float speed={1.5} rotationIntensity={3} floatIntensity={1.5}>
        <mesh position={[1.5, -2, -1]} scale={0.25}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      
      {/* Floating Focus Words */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[0, 2.8, 0]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#a78bfa"
          letterSpacing={0.1}
          fontWeight={800}
        >
          BRANDING
        </Text>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <Text
          position={[2.5, -0.5, 1]}
          rotation={[0, -0.5, 0]}
          fontSize={0.3}
          color="#c4b5fd"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
          fontWeight={600}
          fillOpacity={0.8}
        >
          MARKETING
        </Text>
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <Text
          position={[-2, 1, -1]}
          rotation={[0, 0.5, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.2}
          fontWeight={300}
          fillOpacity={0.5}
        >
          STRATEGY
        </Text>
      </Float>
    </group>
  );
}

function DataNetwork() {
  const count = 1000;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      const r = 3 + Math.random() * 2;
      
      p[i * 3] = 3.5 + r * Math.cos(theta) * Math.sin(phi); 
      p[i * 3 + 1] = (Math.random() - 0.5) * 3; 
      p[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi);
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} color="#c4b5fd" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#818cf8" />
        <pointLight position={[3.5, 0, 0]} intensity={0.5} color="#ffffff" />
        
        <BrandCore />
        <FloatingIcons />
        <DataNetwork />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
