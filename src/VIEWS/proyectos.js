import React, { useState,useCallback,useEffect } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Box,
  Modal,
  Typography
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ImageIcon from '@mui/icons-material/Image';
import LinkIcon from '@mui/icons-material/Link';
import { Grid, } from "@mui/material";
import WEBSUN from "../images/WebSun.png"
import WebEfi from "../images/webFidu.png"
import webPro from "../images/WEBPRO.png"
import webMaqui from "../images/webmaqui.png"
import GitHubIcon from "@mui/icons-material/GitHub";
import EmblaCarousel from "../componets/modal/ModalCarussel";
import sun1 from "../images/sun1.png";
import sun2 from "../images/sun2.png";
import sun3 from "../images/sun3.png";
import sun4 from "../images/sun4.png";
import sun5 from "../images/sun5.png";
import sun6 from "../images/sun6.png";
import efi1 from "../images/efi1.png";
import efi2 from "../images/efi22.png";
import efi3 from "../images/efi3.png";
import efi4 from "../images/efi4.png";
import efi5 from "../images/efi5.png";
import efi6 from "../images/efi6.png";
import efi7 from "../images/efi7.png";
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/pro4.png";
import pro5 from "../images/pro5.png";
import pro6 from "../images/pro6.png";
import maqui1 from "../images/maqui1.png";
import maqui2 from "../images/maqui2.png";
import maqui3 from "../images/maqui3.png";
import { useTranslation } from "react-i18next";




function ImageCard({ project }) {
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);  
  const [open, setOpen] = useState(false);


  return (
    <>
     
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
       sx={{
        position: "relative",
        overflow: "hidden",
        boxShadow: " rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(white, 0.5) 0 0 0 6px",
        backgroundColor: "rgba(26, 14, 192, 0)",
        transition: "transform  .7s  ease",
        transformStyle: "preserve-3d",
        perspective: "100000px", 
        transform: hover
          ? "rotateX(0deg) translateY(10px) scale(1)" 
          : "rotateZ(1deg) rotateX(80deg) rotateY(5deg) scale(.7)" ,
        boxShadow: hover ? 6 : 3
      }}

    >
      <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        image={project.image}
        alt="Imagen"
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "rgba(26, 14, 192, 0)"
        
        }}
      />
      
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
               opacity: hover ? 1 : 0,
              transition: "opacity 0.9s ease",              
          transitionDelay: hover ? ".4s" : "0s" // espera 300ms antes de aparecer

            }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: "white", fontSize: 40 }}
            >
              <ImageIcon fontSize="inherit" />
            </IconButton>
          </Box>
        
        </Box>

      <CardActions
        sx={{
          justifyContent: "center",
          backgroundColor: "rgba(26, 14, 192, 0)"
        }}
      >
        <IconButton onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}>
          <LinkIcon fontSize="inherit"  sx={{ color: "white" }} />

        </IconButton>
        <IconButton onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}>
          <GitHubIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={() => alert("Más info!")}>
          <InfoIcon sx={{ color: "white" }} />
        </IconButton>
      </CardActions>
    </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Card
          sx={{
            position: "absolute",
            color: "white",
            top: "50%",
            left: "50%",
             width: "80%",          
      maxWidth: 900,         
      height: "80%",         
      maxHeight: 600,        
overflow: "auto",       
scrollbarWidth: "none", // Firefox
      "&::-webkit-scrollbar": {
        display: "none", // Chrome, Safari
      },
            transform: "translate(-50%, -50%)",
            background: "#eb00b896", 
      backgroundImage:
        "linear-gradient(to left, #3200fc88, #95008b7d, #eb000087)",
  
            borderRadius: 2,
            p: 4,
            boxShadow: 24
          }}
        >
          <h2>{t("proyectos.descripcion")}</h2>
          <EmblaCarousel slides={project.gallery} />
          {/* <img src={project.image} alt="Detalle" style={{ maxWidth: "100%" }} /> */}
        </Card>
      </Modal>

    </>
    
  );
}

export default function Gallery() {
  const projects = [
  {
    image: WEBSUN,
    url: "https://copyofsunshine.web.app/Home",
    repo: "https://github.com/vinim93/proyectoICOFRONT/tree/master",
    gallery: [
      sun1,
      sun2,
      sun3,
      sun4,
      sun5,
      sun6
    ]
  },
  {
    image: WebEfi,
    url: "https://www.banorte.com/portalfiduciario/",
    repo: "https://github.com/vinim93/proyectoICOFRONT/tree/master",
    gallery: [
      efi1,
      efi2,
      efi3,
      efi4,
      efi5,
      efi6,
      efi7
    ]
  },
  {
    image: webPro,
    url: "https://login-de-appview.web.app/",
    repo: "https://github.com/vinim93/Proyecto-terminadoAPPView",
    gallery: [
      pro1,
      pro2,
      pro3,
      pro4,
      pro5,
      pro6
    ]
  },
  {
    image: webMaqui,
    url: "https://vinim93.github.io/",
    repo: "https://github.com/vinim93/vinim93.github.io",
    gallery: [
     maqui1,
     maqui2,
     maqui3
    ]
  }
];

  const images = [
    WEBSUN,
    WebEfi,
    webPro,
    webMaqui,
   
  ];
const { t } = useTranslation();
  return (
    <div id="proyectos">
    <Typography  className="title honk"
> {t("proyectos.titulo")} </Typography>
    <Grid container spacing={2}>
      
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ImageCard project={project} />
        </Grid>
      ))}
      
    </Grid>
    </div>
  );
}

