import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Scale() {
  const beam = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!beam.current) return;

    beam.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
  });

  return (
    <group position={[0, -0.4, 0]} scale={1.1}>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[1.15, 1.3, 0.25, 32]} />
        <meshStandardMaterial
          color="#c99a3e"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Pillar */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.18, 0.28, 1.7, 24]} />
        <meshStandardMaterial
          color="#d6a84f"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Pivot */}
      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color="#f0d38b"
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Beam */}
      <group ref={beam} position={[0, 0.25, 0]}>
        <mesh>
          <boxGeometry args={[3.5, 0.14, 0.14]} />
          <meshStandardMaterial
            color="#d6a84f"
            metalness={0.95}
            roughness={0.18}
          />
        </mesh>

        {/* Left cable */}
        <mesh position={[-1.25, -0.55, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 1.1, 8]} />
          <meshStandardMaterial
            color="#e8c77a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Right cable */}
        <mesh position={[1.25, -0.55, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 1.1, 8]} />
          <meshStandardMaterial
            color="#e8c77a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Left pan */}
        <mesh
          position={[-1.25, -1.12, 0]}
          rotation={[Math.PI, 0, 0]}
        >
          <cylinderGeometry
            args={[0.62, 0.48, 0.08, 32, 1, true]}
          />
          <meshStandardMaterial
            color="#c99a3e"
            metalness={0.95}
            roughness={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Right pan */}
        <mesh
          position={[1.25, -1.12, 0]}
          rotation={[Math.PI, 0, 0]}
        >
          <cylinderGeometry
            args={[0.62, 0.48, 0.08, 32, 1, true]}
          />
          <meshStandardMaterial
            color="#c99a3e"
            metalness={0.95}
            roughness={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function JusticeScale3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={1}
        gl={{
          antialias: true,
          powerPreference: 'low-power',
        }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[3, 5, 4]}
          intensity={3}
        />

        <pointLight
          position={[-3, 2, 3]}
          intensity={1.5}
        />

        <Scale />
      </Canvas>
    </div>
  );
}