import { Billboard, Image as ImageThree } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useDrag } from "react-use-gesture";

export const Image = (props) => {
  const [position, setPosition] = useState(props.position || [1, 1, 0]);
  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z / aspect]);
    },
    { pointerEvents: true }
  );
  return (
    <mesh ref={ref}>
      <Billboard follow={false} lockX={false}>
        <ImageThree
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3-Yj5B5V4p2eNFpyj3rzj0_lfXyHLVTHWYdjkmjkYQ&s"
          }
          transparent
          {...bind()}
          onClick={console.log}
          position={position}
        >
          {/* <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} /> */}
        </ImageThree>
      </Billboard>
    </mesh>
  );
};
