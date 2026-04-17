"use client";

import dynamic from "next/dynamic";

const ParticleNetwork3D = dynamic(
  () => import("@/components/ParticleNetwork3D"),
  { ssr: false }
);

export default function ParticleWrapper() {
  return <ParticleNetwork3D />;
}
