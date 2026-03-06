import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import bandera1 from "../images/bandera.png";
import bandera2 from "../images/bandera2.png"

export default function LanguageSwitcher({ onChangeLanguage }) {
  return (
    <SpeedDial
      ariaLabel="Language menu"
      direction="left"
      sx={{ position: "fixed", top: 16, right: 16 }}
      FabProps={{
         sx: {
      background: "#eb00b896", 
      backgroundImage:
        "linear-gradient(to left, #3200fc88, #95008b7d, #eb000087)", 
      color: "#fff", 
      "&:hover": {
        background: "#eb00b8", 
        backgroundImage:
          "linear-gradient(to left, #3200fc, #95008b, #eb0000)", 
      },
    },

       }}
      icon={<SpeedDialIcon icon={<TranslateIcon />} openIcon={<LanguageIcon />} />}
    >
      <SpeedDialAction
        icon={<img className="img-fluid" src={bandera1}alt="Español" />}
        tooltipTitle="Español"
        onClick={() => onChangeLanguage("es")}
        
      />
      <SpeedDialAction
        icon={<img className="img-fluid" src={bandera2} alt="English" />}
        tooltipTitle="English"
        onClick={() => onChangeLanguage("en")}
      />
    </SpeedDial>
  );
}
