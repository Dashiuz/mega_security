"use client";

import React, { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 3500 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const hoverRef = useRef({ x: 0, y: 0, active: false });

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.001 + Math.random() / 1000;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      const scaleBase =
        Math.random() < 0.9
          ? Math.random() * 0.4 + 0.1
          : Math.random() * 1.0 + 0.5;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, scaleBase });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      hoverRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      hoverRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      hoverRef.current.active = true;
    };
    const onMouseLeave = () => {
      hoverRef.current.active = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      hoverRef.current.x * 2,
      0.05,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      hoverRef.current.y * 2,
      0.05,
    );
    state.camera.lookAt(0, 0, 0);

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor, scaleBase } = particle;
      t = particle.t += speed;

      const s = scaleBase;
      let x =
        xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 20;
      let y =
        yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 20;
      let z =
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 20;

      if (hoverRef.current.active) {
        const dx = hoverRef.current.x * 30 - x;
        const dy = hoverRef.current.y * 30 - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 10) {
          const force = (10 - dist) / 10;
          x -= dx * force * 0.8;
          y -= dy * force * 0.8;
        }
      }

      dummy.position.set(x, y, z);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null as any, null as any, count]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#00ff66"
        emissiveIntensity={0.25}
        roughness={0.05}
        metalness={1.0}
      />
    </instancedMesh>
  );
}

export default function ParticleNetwork3D() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020205]">
      <Canvas camera={{ position: [0, 0, 40], fov: 60 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Environment preset="studio" blur={1} />
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 20, 10]}
            intensity={2.0}
            color="#ffffff"
          />
          <pointLight
            position={[-10, -20, -10]}
            intensity={3}
            color="#00ff66"
            distance={50}
          />
          <Particles count={3500} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] opacity-80" />
    </div>
  );
}
