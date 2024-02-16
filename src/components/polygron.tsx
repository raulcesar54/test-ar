/* eslint-disable no-unused-vars */
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

export const Polygron = () => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (delta > 20) return;
    meshRef.current.rotation.x += 1 * delta;
  });
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(1),
  ];
  return (
    <mesh
      //   position={{ x: 20, y: 0 }}
      ref={meshRef}
      position={[-0.75, -0.75, 0]}
      geometry={polyhedron[2]}
    >
      <meshBasicMaterial color={"red"} wireframe />
    </mesh>
  );
};
