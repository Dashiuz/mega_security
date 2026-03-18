"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function DustParticles({ count = 8000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  // Interaction Parameters
  const repulsionRadiusSq = 20.0; // Ligeramente más amplio para un efecto más suave
  const repulsionStrength = 10.0;
  const lerpSpeed = 0.05; // Regreso más "butterly smooth"

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const origX = -35 + Math.random() * 70;
      const origY = -25 + Math.random() * 50;
      const origZ = -15 + Math.random() * 25;

      const phase = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.8;

      // Asignación de color: 70% Verde Neón, 30% Plata Titanio
      const color = Math.random() > 0.3 ? "#00ff66" : "#c0c0c0";

      temp.push({
        origX,
        origY,
        origZ,
        currX: origX,
        currY: origY,
        currZ: origZ,
        phase,
        speed,
        color,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const mouseWorld = useMemo(() => new THREE.Vector3(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  // INIT: Pre-populate matrix & colors
  useEffect(() => {
    if (!mesh.current) return;
    for (let i = 0; i < count; i++) {
      const p = particles[i];

      // Setear posición
      dummy.position.set(p.currX, p.currY, p.currZ);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);

      // Setear Color Individual
      tempColor.set(p.color);
      mesh.current.setColorAt(i, tempColor);
    }
    mesh.current.instanceMatrix.needsUpdate = true;

    // FIX CRÍTICO: Avisarle a Three.js que los colores de las instancias se actualizaron
    if (mesh.current.instanceColor) {
      mesh.current.instanceColor.needsUpdate = true;
    }
  }, [count, particles, dummy, tempColor]);

  useFrame((state) => {
    if (!mesh.current) return;

    // Proyección del mouse
    mouseWorld.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0,
    );

    const time = state.clock.elapsedTime;

    particles.forEach((particle, i) => {
      // Idle State: Convección sutil
      const targetX =
        particle.origX +
        Math.sin(time * particle.speed * 0.5 + particle.phase) * 0.5;
      const targetY =
        particle.origY +
        Math.cos(time * particle.speed * 0.7 + particle.phase) * 0.5;
      const targetZ =
        particle.origZ +
        Math.sin(time * particle.speed * 0.3 + particle.phase) * 0.5;

      // Magnetic Repulsion (Nueva Versión - Esférica 3D Real)
      const dx = particle.currX - mouseWorld.x;
      const dy = particle.currY - mouseWorld.y;
      const dz = particle.currZ - mouseWorld.z; // <-- 1. Agregamos el diferencial de profundidad

      // 2. Calculamos el radio al cuadrado usando los 3 ejes
      const distSq = dx * dx + dy * dy + dz * dz;

      // FIX CRÍTICO: distSq > 0.0001 evita la infección por NaN
      if (distSq < repulsionRadiusSq && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        // Curva de fuerza exponencial suave
        const force =
          (Math.sqrt(repulsionRadiusSq) - dist) / Math.sqrt(repulsionRadiusSq);

        // 3. El empuje se distribuye de manera esférica (X, Y y Z)
        particle.currX += (dx / dist) * force * repulsionStrength;
        particle.currY += (dy / dist) * force * repulsionStrength;
        particle.currZ += (dz / dist) * force * repulsionStrength; // <-- 4. Empujamos también en el eje Z
      }

      // Elastic Lerp Interpolation
      particle.currX = THREE.MathUtils.lerp(particle.currX, targetX, lerpSpeed);
      particle.currY = THREE.MathUtils.lerp(particle.currY, targetY, lerpSpeed);
      particle.currZ = THREE.MathUtils.lerp(particle.currZ, targetZ, lerpSpeed);

      dummy.position.set(particle.currX, particle.currY, particle.currZ);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[null as any, null as any, count]}
      frustumCulled={false}
    >
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial
        color="#ffffff" /* <-- BLANCO para respetar los colores de cada instancia */
        transparent={true}
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

function CameraRig() {
  useFrame((state) => {
    const parallaxX = state.mouse.x * 2.5;
    const parallaxY = state.mouse.y * 2.5;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      parallaxX,
      0.05,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      parallaxY,
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ParticleNetwork3D() {
  return (
    <div className="fixed inset-0 z-0 bg-[#020205] overflow-hidden w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 22], fov: 60 }} // Cámara ligeramente más cerca para potenciar la inmersión
        dpr={[1, 2]}
        style={{ position: "absolute", zIndex: 1, inset: 0 }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        eventPrefix="client"
      >
        <CameraRig />
        <DustParticles count={8000} />
      </Canvas>

      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_120%)]" />
    </div>
  );
}
