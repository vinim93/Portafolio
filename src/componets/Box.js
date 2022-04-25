import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../images/map.jpg";



 const Box = () => {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <>
    <mesh rotation={[90, 0, 2]} >
      <boxBufferGeometry   attach="geometry" args={[.25, 3, 3]} />
      <meshNormalMaterial attach="material" />
       <meshStandardMaterial map={colorMap} /> 
    </mesh>
    {/* <mesh visible   rotation={[ 90, 0, 20]}>
  <sphereGeometry args={[1, 20, 20]} attach="geometry" />
  <meshNormalMaterial attach="material" />
</mesh> */}
    </>
    
  );
}

export default Box