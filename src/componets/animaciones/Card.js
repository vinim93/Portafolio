// Card.js

import { useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'
import { LUTPass, LUTCubeLoader } from 'three-stdlib'
import nodeimge from "../../images/img1_.png"



const Card = ({ position,imageUrl }) => {
    const meshRef = useRef();
    const [hovered, hover] = useState(false)
    const texture=useTexture(imageUrl)

    // Suscríbete al bucle de renderizado y rota la caja cada fotograma
    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta;
    });

    return (
        <mesh raycast={() => null}ref={meshRef} position={position}  >           
        <sphereGeometry args={[.5, 64, 64]} />
          <meshPhysicalMaterial map={texture} clearcoat={100} clearcoatRoughness={100} roughness={0} metalness={.5}/>      
          </mesh>
    );
};

export default Card;

