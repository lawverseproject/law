import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/* =========================================================
   FLOATING PARTICLES
========================================================= */

function Particles() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 220;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.8 + Math.random() * 4.5;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 4.8;

      data[i * 3] = Math.cos(angle) * radius;
      data[i * 3 + 1] = height;
      data[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;

    points.current.rotation.y += delta * 0.018;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.022}
        color="#e8c77a"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   FLOATING LEGAL DOCUMENT
========================================================= */

function DocumentCard({
  position,
  rotation,
  delay,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  delay: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime + delay;

    ref.current.position.y =
      position[1] + Math.sin(t * 0.65) * 0.1;

    ref.current.rotation.z =
      rotation[2] + Math.sin(t * 0.4) * 0.025;

    ref.current.rotation.y =
      rotation[1] + Math.sin(t * 0.3) * 0.06;
  });

  return (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
    >
      {/* Document */}
      <mesh>
        <planeGeometry args={[1.05, 1.45]} />

        <meshStandardMaterial
          color="#151b25"
          metalness={0.35}
          roughness={0.42}
          transparent
          opacity={0.95}
          side={THREE.DoubleSide}
          emissive="#3b2b12"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Gold border */}
      <mesh position={[0, 0, 0.012]}>
        <planeGeometry args={[0.98, 1.38]} />

        <meshBasicMaterial
          color="#d6a84f"
          transparent
          opacity={0.18}
          wireframe
        />
      </mesh>

      {/* Document lines */}
      {[0.38, 0.18, -0.02, -0.22, -0.42].map(
        (y, index) => (
          <mesh
            key={index}
            position={[
              index === 0 ? -0.04 : 0,
              y,
              0.025,
            ]}
          >
            <planeGeometry
              args={[
                index === 0 ? 0.48 : 0.72,
                0.012,
              ]}
            />

            <meshBasicMaterial
              color="#d6a84f"
              transparent
              opacity={
                index === 0 ? 0.5 : 0.18
              }
            />
          </mesh>
        )
      )}

      {/* Citation node */}
      <mesh
        position={[0.3, 0.47, 0.035]}
      >
        <sphereGeometry args={[0.04, 12, 12]} />

        <meshStandardMaterial
          color="#f1d68f"
          emissive="#d6a84f"
          emissiveIntensity={2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   JUSTICE SCALE
========================================================= */

function JusticeScale() {
  const group = useRef<THREE.Group>(null);
  const beam = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current || !beam.current) return;

    const t = state.clock.elapsedTime;

    group.current.position.y =
      Math.sin(t * 0.55) * 0.035;

    group.current.rotation.y =
      Math.sin(t * 0.22) * 0.025;

    beam.current.rotation.z =
      Math.sin(t * 0.7) * 0.012;
  });

  return (
    <group
      ref={group}
      position={[0, -0.55, 0]}
      scale={0.88}
    >
      {/* =================================================
          BASE
      ================================================= */}

      <mesh position={[0, -1.45, 0]}>
        <cylinderGeometry
          args={[1.0, 1.18, 0.22, 40]}
        />

        <meshStandardMaterial
          color="#b9852d"
          metalness={0.92}
          roughness={0.18}
          emissive="#4a300b"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Base highlight */}
      <mesh position={[0, -1.31, 0]}>
        <cylinderGeometry
          args={[0.7, 0.84, 0.1, 40]}
        />

        <meshStandardMaterial
          color="#edc96d"
          metalness={1}
          roughness={0.13}
          emissive="#6d4b13"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* =================================================
          CENTRAL COLUMN
      ================================================= */}

      <mesh position={[0, -0.62, 0]}>
        <cylinderGeometry
          args={[0.15, 0.24, 1.55, 32]}
        />

        <meshStandardMaterial
          color="#c89435"
          metalness={0.95}
          roughness={0.16}
          emissive="#4f310b"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Glow ring */}
      <mesh position={[0, 0.12, 0]}>
        <torusGeometry
          args={[0.19, 0.025, 12, 32]}
        />

        <meshStandardMaterial
          color="#f1d68f"
          metalness={1}
          roughness={0.12}
          emissive="#d6a84f"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* =================================================
          CENTER SPHERE
      ================================================= */}

      <mesh position={[0, 0.17, 0]}>
        <sphereGeometry
          args={[0.17, 24, 24]}
        />

        <meshStandardMaterial
          color="#f1d68f"
          metalness={1}
          roughness={0.1}
          emissive="#d6a84f"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* =================================================
          BEAM
      ================================================= */}

      <group
        ref={beam}
        position={[0, 0.17, 0]}
      >
        <mesh>
          <boxGeometry
            args={[3.15, 0.1, 0.12]}
          />

          <meshStandardMaterial
            color="#d6a84f"
            metalness={1}
            roughness={0.14}
            emissive="#593b0d"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Left chain */}
        <mesh
          position={[-1.1, -0.43, 0]}
        >
          <cylinderGeometry
            args={[0.008, 0.008, 1.05, 10]}
          />

          <meshStandardMaterial
            color="#edcf83"
            metalness={1}
            roughness={0.12}
          />
        </mesh>

        {/* Right chain */}
        <mesh
          position={[1.1, -0.43, 0]}
        >
          <cylinderGeometry
            args={[0.008, 0.008, 1.05, 10]}
          />

          <meshStandardMaterial
            color="#edcf83"
            metalness={1}
            roughness={0.12}
          />
        </mesh>

        {/* Left pan */}
        <mesh
          position={[-1.1, -0.98, 0]}
          rotation={[Math.PI, 0, 0]}
        >
          <cylinderGeometry
            args={[
              0.52,
              0.4,
              0.07,
              36,
              1,
              true,
            ]}
          />

          <meshStandardMaterial
            color="#c89435"
            metalness={0.98}
            roughness={0.16}
            side={THREE.DoubleSide}
            emissive="#4a2f0a"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Right pan */}
        <mesh
          position={[1.1, -0.98, 0]}
          rotation={[Math.PI, 0, 0]}
        >
          <cylinderGeometry
            args={[
              0.52,
              0.4,
              0.07,
              36,
              1,
              true,
            ]}
          />

          <meshStandardMaterial
            color="#c89435"
            metalness={0.98}
            roughness={0.16}
            side={THREE.DoubleSide}
            emissive="#4a2f0a"
            emissiveIntensity={0.15}
          />
        </mesh>
      </group>
    </group>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.65} />

      {/* Main warm light */}
      <directionalLight
        position={[4, 6, 5]}
        intensity={4}
        color="#fff1c7"
      />

      {/* Left rim */}
      <pointLight
        position={[-4, 1, 3]}
        intensity={3}
        distance={9}
        color="#e8c77a"
      />

      {/* Right rim */}
      <pointLight
        position={[4, 1, 2]}
        intensity={2.2}
        distance={8}
        color="#c89435"
      />

      {/* Front light */}
      <pointLight
        position={[0, 1, 5]}
        intensity={2}
        distance={10}
        color="#fff4d6"
      />

      {/* Particles */}
      <Particles />

      {/* =================================================
          FLOATING DOCUMENTS
      ================================================= */}

      <DocumentCard
        position={[-2.35, 1.05, -0.9]}
        rotation={[0.05, 0.25, -0.15]}
        delay={0}
      />

      <DocumentCard
        position={[2.35, 1.15, -1.1]}
        rotation={[-0.05, -0.22, 0.14]}
        delay={2}
      />

      <DocumentCard
        position={[-2.65, -0.7, -0.8]}
        rotation={[0.08, 0.2, 0.08]}
        delay={4}
      />

      <DocumentCard
        position={[2.65, -0.65, -0.9]}
        rotation={[-0.08, -0.2, -0.1]}
        delay={1}
      />

      {/* Justice scale */}
      <JusticeScale />

      {/* =================================================
          CINEMATIC FLOOR
      ================================================= */}

      <mesh
        position={[0, -2.05, -0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <circleGeometry
          args={[3.1, 64]}
        />

        <meshBasicMaterial
          color="#d6a84f"
          transparent
          opacity={0.055}
        />
      </mesh>

      {/* Inner ring */}
      <mesh
        position={[0, -2.03, -0.18]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry
          args={[1.7, 1.73, 64]}
        />

        <meshBasicMaterial
          color="#d6a84f"
          transparent
          opacity={0.2}
        />
      </mesh>
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function LegalUniverse3D() {
  return (
    <div className="relative h-full w-full overflow-hidden">

      <Canvas
        className="!absolute inset-0"
        camera={{
          position: [0, 0, 6],
          fov: 42,
        }}
        dpr={1}
        gl={{
          antialias: true,
          powerPreference: 'low-power',
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>

    </div>
  );
}