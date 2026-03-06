import React, { Suspense } from 'react';
import { appfire, analytics } from "./firebase"
import './App.css';
import { Canvas } from "@react-three/fiber"
import styled from "styled-components";
import { OrbitControls, Environment, Effects, useTexture, use } from "@react-three/drei";
import TextSection from "./componets/TextSection"
import Box from './componets/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "./componets/Background"
import LoaderSpiner from './componets/LoaderSpiner';
import WhatsAppButton from "./componets/WhatsAppButton"
import Card from './componets/animaciones/Card';
import imageUrl from "./images/imgnode.png"
import imageUrl2 from "./images/imgreact.png"
import imageUrl3 from "./images/firebase.png"
import imageUrl4 from "./images/mongo.png"
import imageUrl5 from "./images/javascript.jpeg"
import imageUrl6 from "./images/docker-4.svg"
import gitimg from "./images/git.jpg"
import imgOS from "./images/logoOP.png"
import postimg from "./images/postman.png"
import { Tooltip, tooltipClasses, Typography } from '@mui/material';
import ParticlesComponent from './VIEWS/ParticlesBackgroud';
import soapimg from "./images/soapui.png"
import graimg from "./images/grapql.png"
import materialimg from "./images/materialUI.png"
import { useMediaQuery } from "@mui/material";
import Gallery from './VIEWS/proyectos';
import NavStepper from './VIEWS/Steper';
import PdfGrid from './VIEWS/Diplomas';
import Experiencia from "./VIEWS/Experiencia"
import LanguageSwitcher from './VIEWS/Translate';
import i18n from "./VIEWS/config/Contrans";
import { useTranslation } from "react-i18next";


const CanvasWrapper = React.forwardRef((props, ref) => {
 
  return (
    <Canvas ref={ref} {...props}>
      {props.children}
    </Canvas>
  );
});





const App = () => {
   const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };


  return (


    <Wrapper className="App">

      <Background className="background" />
      <div className='container '>

        <Suspense className="suspense" fallback={<LoaderSpiner margin="dense" />}>
          <ParticlesComponent />
          <LanguageSwitcher onChangeLanguage={handleLanguageChange} />
          <NavStepper />
         

          <TextSection className="text-section" />

          <WhatsAppButton className="align-bottom" />
          <div className='row position-relative '>
            <div className='row position-relative ' id="tecnologias">
              <Typography variant="h2" className='title' sx={{}}>
                {t("tecnologias.titulo")}
              </Typography>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2 '>
                <Tooltip className='customtooltip'
                  title="React"
                  arrow
                  disableInteractive
                  componentsProps={{
                    tooltip: {
                      sx: {
                        touchAction: isMobile ? "none" : "auto",
                        pointerEvents: isMobile ? "none" : "none",
                        fontSize: "130%",

                      },
                    },
                  }}
                >


                  <CanvasWrapper camera={{ position: [0, 0, 5], fov: 45 }}
                    sx={{
                      touchAction: "manipulation"
                    }}
                  >

                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imageUrl2} sx={{
                      touchAction: "manipulation"
                    }} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />

                  </CanvasWrapper>
                </Tooltip>

              </div>

              <div className='col-6 col-md-4 col-sm-4 col-lg-2 '>
                <Tooltip className='customtooltip' title="NODE" arrow
                  disableInteractive
                  componentsProps={{
                    tooltip: {
                      sx: {
                        touchAction: isMobile ? "none" : "auto",
                        pointerEvents: isMobile ? "none" : "none",
                        fontSize: "130%",

                      },
                    },
                  }}

                >


                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imageUrl} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>
              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2   '>
                <Tooltip className='customtooltip' title="mongoDB" arrow
                  disableInteractive
                  componentsProps={{
                    tooltip: {
                      sx: {
                        touchAction: isMobile ? "none" : "auto",
                        pointerEvents: isMobile ? "none" : "none",
                        fontSize: "130%",

                      },
                    },
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imageUrl4} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2'>
                <Tooltip className='customtooltip' title="Firebase" arrow
                  disableInteractive
                  componentsProps={{
                    tooltip: {
                      sx: {
                        touchAction: isMobile ? "none" : "auto",
                        pointerEvents: isMobile ? "none" : "none",
                        fontSize: "130%",

                      },
                    },
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imageUrl3} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2  '>
                <Tooltip className='customtooltip' title="javascript" arrow
                  disableInteractive
                  componentsProps={{
                    tooltip: {
                      sx: {
                        touchAction: isMobile ? "none" : "auto",
                        pointerEvents: isMobile ? "none" : "none",
                        fontSize: "130%",

                      },
                    },
                  }}
                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imageUrl5} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>
              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2 '>
                <Tooltip className='customtooltip' title="Docker" arrow
                  disableInteractive
                  componentsProps={{
                    tooltip: {
                      sx: {
                        touchAction: isMobile ? "none" : "auto",
                        pointerEvents: isMobile ? "none" : "none",
                        fontSize: "130%",

                      },
                    },
                  }}

                >


                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imageUrl6} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>
              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2  '>
                <Tooltip disableInteractive className='customtooltip' title="OpenShift" PopperProps={{
                  modifiers: [{
                    name: "offset",
                    options: { offset: [0, -100] },

                  }
                  ]
                }} arrow
                  sx={{
                    "& .MuiTooltip-tooltip": {
                      fontSize: "160px"
                    }
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={imgOS} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2  '>
                <Tooltip disableInteractive className='customtooltip' title="Github" PopperProps={{
                  modifiers: [{
                    name: "offset",
                    options: { offset: [0, -100] },

                  }
                  ]
                }} arrow
                  sx={{
                    "& .MuiTooltip-tooltip": {
                      fontSize: "160px"  // ajusta el tamaño aquí
                    }
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={gitimg} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2  '>
                <Tooltip disableInteractive className='customtooltip' title="Postman" PopperProps={{
                  modifiers: [{
                    name: "offset",
                    options: { offset: [0, -100] },

                  }
                  ]
                }} arrow
                  sx={{
                    "& .MuiTooltip-tooltip": {
                      fontSize: "160px"
                    }
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={postimg} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2  '>
                <Tooltip disableInteractive className='customtooltip' title="SOAPUI" PopperProps={{
                  modifiers: [{
                    name: "offset",
                    options: { offset: [0, -100] },

                  }
                  ]
                }} arrow
                  sx={{
                    "& .MuiTooltip-tooltip": {
                      fontSize: "160px"
                    }
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={soapimg} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2  '>
                <Tooltip disableInteractive className='customtooltip' title="materialUI" PopperProps={{
                  modifiers: [{
                    name: "offset",
                    options: { offset: [0, -100] },

                  }
                  ]
                }} arrow
                  sx={{
                    "& .MuiTooltip-tooltip": {
                      fontSize: "160px"
                    }
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={materialimg} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
              <div className='col-6 col-md-4 col-sm-4 col-lg-2 '>
                <Tooltip disableInteractive className='customtooltip' title="GRAPHQL" PopperProps={{
                  modifiers: [{
                    name: "offset",
                    options: { offset: [0, -100] },

                  }
                  ]
                }} arrow
                  sx={{
                    "& .MuiTooltip-tooltip": {
                      fontSize: "160px"
                    }
                  }}

                >

                  <CanvasWrapper resize={{ scroll: false }} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={Math.PI / .7} />
                    <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[10, 10, 10]} />
                    <Card position={[0, 0, 0]} imageUrl={graimg} />
                    <OrbitControls enableZoom={false} enableRotate={isMobile ? false : true} />
                  </CanvasWrapper>
                </Tooltip>

              </div>
            </div>

            <div className="" style={{ position: 'relative', }}>
              <Gallery />
              <PdfGrid />
              <Experiencia />




            </div>



          </div>


        </Suspense>

      </div>

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
