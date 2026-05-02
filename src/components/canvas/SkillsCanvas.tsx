import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody, InstancedRigidBodies, BallCollider, RapierRigidBody } from '@react-three/rapier';
import { Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

const SKILLS = [
  "React", "Three.js", "GSAP", "Framer", "Tailwind",
  "Node.js", "Next.js", "WebGL", "TypeScript", "Vite",
  "CSS", "HTML", "UI/UX", "Physics"
];

function Pointer() {
  const ref = useRef<RapierRigidBody>(null);
  
  useFrame(({ pointer, viewport }) => {
    if (!ref.current) return;
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    ref.current.setNextKinematicTranslation({ x, y, z: 0 });
  });

  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Orbs() {
  const count = SKILLS.length;
  
  // Create instances
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 2
      ]);
    }
    return pos;
  }, [count]);

  const materials = useMemo(() => [
    new THREE.MeshStandardMaterial({ color: '#00f3ff', roughness: 0.1, metalness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: '#b000ff', roughness: 0.1, metalness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2, metalness: 0.5 }),
  ], []);

  return (
    <>
      {SKILLS.map((skill, i) => (
        <RigidBody 
          key={i} 
          position={positions[i] as [number, number, number]} 
          restitution={1} 
          friction={0} 
          linearDamping={0.5} 
          angularDamping={0.5}
        >
          <mesh material={materials[i % 3]}>
            <sphereGeometry args={[0.8, 32, 32]} />
          </mesh>
          <Text
            position={[0, 0, 0.9]}
            fontSize={0.25}
            color="#000"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#fff"
          >
            {skill}
          </Text>
          <BallCollider args={[0.8]} />
        </RigidBody>
      ))}
    </>
  );
}

export function SkillsCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 35 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Environment preset="city" />
        
        <Physics gravity={[0, 0, 0]}>
          <Pointer />
          <Orbs />
          
          {/* Invisible boundaries to keep orbs in view */}
          <RigidBody type="fixed" position={[0, -8, 0]}>
            <boxGeometry args={[20, 1, 10]} />
            <meshBasicMaterial visible={false} />
          </RigidBody>
          <RigidBody type="fixed" position={[0, 8, 0]}>
            <boxGeometry args={[20, 1, 10]} />
            <meshBasicMaterial visible={false} />
          </RigidBody>
          <RigidBody type="fixed" position={[-12, 0, 0]}>
            <boxGeometry args={[1, 20, 10]} />
            <meshBasicMaterial visible={false} />
          </RigidBody>
          <RigidBody type="fixed" position={[12, 0, 0]}>
            <boxGeometry args={[1, 20, 10]} />
            <meshBasicMaterial visible={false} />
          </RigidBody>
          <RigidBody type="fixed" position={[0, 0, -5]}>
            <boxGeometry args={[30, 30, 1]} />
            <meshBasicMaterial visible={false} />
          </RigidBody>
          <RigidBody type="fixed" position={[0, 0, 5]}>
            <boxGeometry args={[30, 30, 1]} />
            <meshBasicMaterial visible={false} />
          </RigidBody>
        </Physics>
      </Canvas>
    </div>
  );
}
