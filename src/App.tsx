import { useState } from "react";
import "./util";

export const App = () => {
  const [te, setTe] = useState({
    lat: 0,
    lgn: 0,
  });
  console.log(
    navigator.geolocation.getCurrentPosition((position) => {
      setTe({ lat: position.coords.latitude, lgn: position.coords.longitude });
    })
  );
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
    >
      <a-entity
        gltf-model="./scenes/magnemite/scene.gltf"
        rotation="0 180 0"
        scale="0.15 0.15 0.15"
        gps-entity-place={`longitude: -56.0287496; latitude: -15.6049534;`}
        animation-mixer
      />
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
    // <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
    //   <ScrollControls pages={4} infinite>
    //     <Rig rotation={[0, 0, 0.15]}>
    //       <Caroussel />
    //     </Rig>
    //     <Banner position={[0, -0.15, 0]} />
    //   </ScrollControls>
    //   <Environment preset="dawn" background blur={0.5} />
    // </Canvas>
  );
};
