import React, { Suspense } from 'react';
import './App.css';

import {Canvas} from "@react-three/fiber"
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import TextSection from "./componets/TextSection"
import  Box  from './componets/Box';
import Background from "./componets/Background"
import LoaderSpiner  from './componets/LoaderSpiner';



const App=()=> {
  
  return (
   
    
    <Wrapper className="App">
       <Background className="background"/>
       <Suspense className="suspense" fallback={<LoaderSpiner margin="dense"/>}>
     <TextSection className=" text-section"/>
    
     <Canvas className='canvas'>
     <OrbitControls enableZoom={false} enablePan={false} autoRotate />
     <ambientLight intensity={1} />
     <directionalLight position={[-2, 5, 2]} />
     
     <Box></Box>
     
     </Canvas>
     </Suspense>
    </Wrapper>
   
  );
}


const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 400px;
  }
`;
export default App;
