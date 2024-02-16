/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Polygron } from "./components/polygron";
import {
  Stats,
  OrbitControls,
  PointerLockControls,
  Text,
  Billboard,
  ScreenSpace,
  Box,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { Image } from "./components/image";
import { Toolbox } from "./components/toolbox";

export const App = () => {
  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none flex justify-center items-center">
        <div className="w-2 h-2 bg-red-400"></div>
      </div>
      <Toolbox />
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* <Image position={[1, 1, 0]} /> */}
        {/* <Box /> */}
        {/* <Polygron /> */}
        <gridHelper />
        {/* <Billboard>
          <Html position={[0, 0, 0]}>
            <div className="bg-white p-4 ">
              <h1>asd</h1>
            </div>
          </Html>
          <Html position={[2, 0, 0]} rotation={[0, 4, 0]}>
            <div className="bg-white p-4 ">
              <h1>23</h1>
              <h1>23</h1>
              <h1>23</h1>
              <h1>23</h1>
              <h1>23</h1>
            </div>
          </Html>
          <Html position={[5, 0, 5]} rotation={[0, 8, 5]}>
            <div className="bg-white p-4 ">
              <h1>23</h1>
              <h1>23</h1>
              <h1>23</h1>
              <h1>23</h1>
              <h1>23</h1>
            </div>
          </Html>
        </Billboard> */}
        <OrbitControls />
        {/* <Image position={[0, 0, 0]} />
        <Image position={[2, 0, 0]} />
        <Image position={[4, 0, 0]} />
        <Image position={[6, 0, 0]} /> */}
        {/* <PointerLockControls /> */}
      </Canvas>
    </>
  );
};

export default App;
