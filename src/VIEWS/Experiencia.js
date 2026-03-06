import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LogoEfi from "../images/LOGOEFI.png"
import "./experiencia.css"
import { Fade } from 'react-reveal';
import Kapitalimg from "../images/Kapital_Banks.png"
import Sunshineimg from "../images/modenasun.svg"
import Ticaimg from "../images/TICAMEXZ.svg"
import Mainimg from "../images/main-removebg-preview.png"
import GnpIMG from "../images/Logo_del_GNP.svg"
import { useTranslation } from "react-i18next";



export default function Experiencia() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (

    <div id="experiencia" >
      <Typography  variant="h2" className='title' sx={{ mt: 5, mb: 5 }}>
        {t("experiencia.titulo")}
      </Typography>
      < Fade right>
        <Card className="cardb cardcontent" sx={{ fontFamily: "'Audiowide',sans-serif",display: 'flex', maxwidth: "100vw" }}>
          <Box className="col-12 col-lg-9 cardcontent" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent className="cardcontent"sx={{ fontFamily: "'Audiowide', sans-serif"
              ,flex: '1 0 auto' }}>
              <Typography component="div" className="cardcontent" variant="h4">
                {t("experiencia.subtituloefi")}
              </Typography>
              <Typography component="div" variant="h5" color="red">
                {t("experiencia.tiempoefi")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {t("experiencia.descripcionefi")}
              </Typography>
            </CardContent>

          </Box>
          <Box className="col-3" sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: 'column',
           justifyContent: "center" }}>
          

            <CardMedia

              component="img"
              sx={{
                objectFit: "contain",
                objectPosition: "center",
                height: 200
              }}
              image={LogoEfi}
              alt="Efi"
            />
          </Box>
        </Card>
      </Fade>

      < Fade right>
        <Card className="cardb cardcontent mt-5" sx={{ display: 'flex', maxwidth: "100vw" }}>
          <Box className="col-12 col-lg-9 cardcontent" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent className="cardcontent" sx={{ flex: '1 0 auto' }}>
              <Typography component="div" className="cardcontent" variant="h4">
                {t("experiencia.subtitulokapi")}
              </Typography>
              <Typography component="div" variant="h5" color="red">
                {t("experiencia.tiempokapi")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {t("experiencia.descripcionkapi")}
              </Typography>
            </CardContent>

          </Box>
          <Box className="col-3" sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'column',
                justifyContent: "center"}}>

            <CardMedia

              component="img"
              sx={{

                objectFit: "contain",
                objectPosition: "center",
                height: 200
              }}
              image={Kapitalimg}
              alt="Efi"
            />
          </Box>
        </Card>
      </Fade>

      < Fade right>
        <Card className="cardb cardcontent mt-5" sx={{ display: 'flex', maxwidth: "100vw" }}>
          <Box className="col-12 col-lg-9 cardcontent" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent className="cardcontent" sx={{ flex: '1 0 auto' }}>
              <Typography component="div" className="cardcontent" variant="h4">
                {t("experiencia.subtitulosun")}
              </Typography>
              <Typography component="div" variant="h5" color="red">
                {t("experiencia.tiemposun")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {t("experiencia.descripcionsun")}
                
              </Typography>
            </CardContent>

          </Box>
          <Box className="col-3" sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'column', 
         
                justifyContent: "center",
              
        }}>

            <CardMedia

              component="img"
              sx={{

                objectFit: "contain",
                objectPosition: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                
                height: 200
              }}
              image={Sunshineimg}
              alt="Efi"
            />
          </Box>
        </Card>
      </Fade>

      < Fade right>
        <Card className="cardb mt-5" sx={{ display: 'flex', maxwidth: "100vw" }}>
          <Box className="col-12 col-lg-9 cardcontent" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent className="cardcontent" sx={{ flex: '1 0 auto' }}>
              <Typography className="cardcontent" component="div" variant="h4">
                {t("experiencia.subtitulotica")}
              </Typography>
              <Typography component="div" variant="h5" color="red">
                {t("experiencia.tiempotica")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {t("experiencia.descripciontica")}
              </Typography>
            </CardContent>

          </Box>
          <Box className="col-3" sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'column',
                justifyContent: "center" }}>

            <CardMedia
                 className='img-fluid'
              component="img"
              sx={{

                objectFit: "contain",
                objectPosition: "center",
                height: 200
              }}
              image={Ticaimg}
              alt="Efi"
            />
          </Box>
        </Card>
      </Fade>

      < Fade right>
        <Card className="cardb mt-5" sx={{ display: 'flex', maxwidth: "100vw" }}>
          <Box className="col-12 col-lg-9 cardcontent" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent className="cardcontent" sx={{ flex: '1 0 auto' }}>
              <Typography component="div" className="cardcontent" variant="h4">
                {t("experiencia.subtitulognp")}
              </Typography>
              <Typography component="div" variant="h5" color="red">
                {t("experiencia.tiempognp")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {t("experiencia.descripciongnp")}
              </Typography>
            </CardContent>

          </Box>
          <Box className="col-3" sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'column',
                justifyContent: "center",}}>

            <CardMedia

              component="img"
              sx={{

                objectFit: "contain",
                objectPosition: "center",
                height: 200
              }}
              image={GnpIMG}
              alt="Efi"
            />
          </Box>
        </Card>
      </Fade>
      < Fade right>
        <Card className="cardb mt-5" sx={{ display: 'flex', maxwidth: "100vw" }}>
          <Box className="col-12 col-lg-9" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h4">
                  {t("experiencia.subtitulomain")}
              </Typography>
              <Typography component="div" variant="h5" color="red">
                {t("experiencia.tiempomain")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {t("experiencia.descripcionmain")}
              </Typography>
            </CardContent>

          </Box>
          <Box className="col-3" sx={{ display: { xs: "none", md: "flex" }, flexDirection: 'column',
                justifyContent: "center",}}>

            <CardMedia

              component="img"
              sx={{

                objectFit: "cover",
                objectPosition: "center",
                height: 200
              }}
              image={Mainimg}
              alt="Efi"
            />
          </Box>
        </Card>
      </Fade>

    </div>
  );
}