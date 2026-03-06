import styled from "styled-components";
import  Avatar  from "../images/miofo.png";
import "./index.css"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import { Card, CardContent, CardMedia,Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { LinkedIn } from "@mui/icons-material";
import Phone  from "@mui/icons-material/Phone";
import { GitHub } from "@mui/icons-material";
import Reactanima from "./animaciones/Reactanima"
import { useTranslation } from "react-i18next";




export default function TextSection() {
  const { t } = useTranslation();
  return (
    <div id="inicio" className='row position-relative'>
      <Card sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, 
        width: "100%",
         height: "100%",  
        bgcolor:"transparent",
        alignItems: "center",        
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "none",
        

        }}>

      <div className="col-4 contCarimgAV">
        <CardMedia
        className="avatar"
        component="img"
        image={Avatar}
        alt="Imagen descriptiva"
        sx={{
          
          width: { xs: "100%", md: "60%" }, // ocupa todo en móvil, 40% en desktop
          height:"100%",
          objectFit: "cover",                    
          justifyContent: "center",
          alignItems:"center",
          textAlign: "center",
        }}
>
      </CardMedia>
      </div>
     
      <div className="col-lg-5 col-sx-12 text-start ">
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>


      <Title className="title honk"
> {t("inicio.titulo")}</Title>
      <Description>
     
      <Box sx={{ width: '100%', maxWidth: 350, bgcolor: 'background' }}>
       Jose manuel  Viniegra Molina
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={t("inicio.email")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary={t("inicio.telefono")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://github.com/vinim93?tab=repositories" target="_blank" rel="noreferrer noopener">
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="github:https://github.com/vinim93?tab=repositories" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="https://www.linkedin.com/in/jose-manuel-viniegra-molina-aab9a51a8/" target="_blank" rel="noreferrer noopener">
              <ListItemIcon>
                < LinkedIn/>
              </ListItemIcon>
              <ListItemText primary="linkedin:https://www.linkedin.com/in/jose-manuel-viniegra-molina-aab9a51a8/" />
            </ListItemButton>            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://drive.google.com/uc?export=download&id=1pb6fzw4bb_vHhtsCPidR7LiiVuqynC9V"
 download>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary={t("inicio.boton")} />
            </ListItemButton>            
          </ListItem>
        </List>
      
      <Divider />
     
    </Box>

      </Description>
      </CardContent>
      </div>
      <div className="col-3 d-none d-lg-flex">
<Reactanima/>

      </div>
      </Card>
      </div>
    
  );
}



const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.div`
  
  color: rgba(255, 255, 255, 0.7);
  fotn-family: "Audiowide", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
