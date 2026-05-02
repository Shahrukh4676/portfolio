import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, color, speed, rotSpeed }: any) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * rotSpeed * 0.5;
      ref.current.rotation.y += delta * rotSpeed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5} floatingRange={[-0.8, 0.8]}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

function WireframeBox({ position, color, speed }: any) {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function Scene() {
  const camRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    if (camRef.current) {
      camRef.current.position.x += (state.pointer.x * 1.5 - camRef.current.position.x) * 0.04;
      camRef.current.position.y += (state.pointer.y * 1.2 - camRef.current.position.y) * 0.04;
      camRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera ref={camRef} makeDefault position={[0, 0, 12]} fov={50} />
      <Stars radius={120} depth={60} count={2500} factor={3} saturation={0.3} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={1.5} />
      <pointLight position={[-5, -5, 5]} color="#7B2FBE" intensity={1} />

      <FloatingGeometry position={[-5, 2, -2]} color="#00f5ff" speed={1.5} rotSpeed={0.4} />
      <FloatingGeometry position={[5, -1.5, -3]} color="#7B2FBE" speed={1.2} rotSpeed={0.3} />
      <FloatingGeometry position={[0, 3.5, -5]} color="#ff2d78" speed={0.8} rotSpeed={0.5} />
      <WireframeBox position={[-3, -2.5, -1]} color="#00f5ff" speed={2} />
      <WireframeBox position={[4, 2, -4]} color="#7B2FBE" speed={1.5} />
    </>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 12], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
