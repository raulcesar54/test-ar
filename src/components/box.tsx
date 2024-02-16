/* eslint-disable no-unused-vars */
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

export const Box = () => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (delta > 20) return;
    // meshRef.current.rotation.x += 1 * delta;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerDown={(event) => console.log(event)}
      // material={new THREE.MeshBasicMaterial()}
    >
      <boxGeometry />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
};
