import React, { useState } from "react";
import { Grid, Dialog,Card,CardContent,Typography, CardMedia,Box,IconButton } from "@mui/material";
import { Document, Page,pdfjs } from "react-pdf";
import ImageIcon  from "@mui/icons-material/Image";
//import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";
//import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker.min.js";
import diploma1 from "../docs/diploma-bootstrap.pdf";
import diploma2 from "../docs/diploma-git-github.pdf";
import diploma3 from "../docs/diploma-html5-css3.pdf";
import diploma4 from "../docs/diploma-responsive-design.pdf";
import diploma5 from "../docs/Full_Stack_JavaScript.pdf";
import diploma6 from "../docs/Prototype___Full_Stack.pdf";
import  {Slide,Fade,Zoom} from "react-reveal";
import { useTranslation } from "react-i18next";
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.js",
//   import.meta.url
// ).toString();




// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();



//pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const pdfs = [
    diploma1,
    diploma2,
    diploma3,
    diploma4,
    diploma5,
    diploma6
];

export default function PdfGrid() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);  
  const [selectedPdf, setSelectedPdf] = useState(null);
    const directions = ["left", "right", "top", "bottom"];
    

  const handleOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPdf(null);
  };

  return (
    
    <div id="diplomas">
    <Typography  className="title honk"
    >{t("diplomas.titulo")}</Typography>
      <Grid container spacing={2}>
        {pdfs.map((pdf, index) => (
           
          <Grid item xs={6} md={4} key={index}>
            <Fade  left={index % 4 === 0}
            right={index % 4 === 1}
            top={index % 4 === 2}
            bottom={index % 4 === 3}
            delay ={index * 400}>
              
            <Card
            onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
              sx={{
                
                 cursor: "pointer", boxShadow: 3,
                 bgcolor:"transparent",
        overflow: "hidden",
        display: "flex",
      flexDirection: "column",
      alignItems: "center",
               }}
              onClick={() => handleOpen(pdf)}
            >
              <CardMedia sx={{ position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "16/9", // fuerza proporción horizontal
        overflow: "hidden",
 }}>
  <Box
            sx={{
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.9s ease",
    transitionDelay: ".4s",
    zIndex: 1,
    "&:hover": {
      opacity: 1,
    },
  }}

          > 
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: "white", fontSize: 40 }}
            >
              <ImageIcon fontSize="inherit" />
            </IconButton>
              </Box>
                <Document
                  file={pdf}
                  onLoadError={(err) => console.error("Load error:", err)}
                  onSourceError={(err) => console.error("Source error:", err)}
                >
                  {/* Usa scale en lugar de width para mantener proporción */}
                  <Page pageNumber={1} // ajusta ancho fijo
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={0.43}
 />
                </Document>
              
              </CardMedia>
              
            </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>


      <Dialog  sx={{bgcolor: "transparent"
        
       }} maxWidth="lg"   // ancho grande
 maxHeight="90vh" // altura máxima del 90% de la ventana
 
 open={open} onClose={handleClose}>
        <CardContent sx={{ width: "100%",
            background: "#eb00b896", 
      backgroundImage:
        "linear-gradient(to left, #3200fc88, #95008b7d, #eb000087)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
 }}>
          {selectedPdf && (
            <Document file={selectedPdf}>
              <Page pageNumber={1} renderMode="svg" renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={0.70} />
              {/* Puedes agregar navegación de páginas aquí */}
            </Document>
        )}
        </CardContent>
      </Dialog>
    </div>
  );
}

