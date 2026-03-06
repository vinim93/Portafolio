import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";




// 🔹 Secciones de tu landing
const sections = [
  { label: "Inicio", id: "inicio", icon: <HomeIcon /> },
  { label: "Tecnologías", id: "tecnologias", icon: <CodeIcon /> },
  { label: "Proyectos", id: "proyectos", icon: <WorkIcon /> },
  { label: "Diplomas", id: "diplomas", icon: <SchoolIcon /> },
  { label: "Experiencia", id: "experiencia", icon: <BadgeIcon /> },
];

// 🔹 Conector personalizado
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 3,
    height: 30,
    border: 0,
    backgroundColor: "rgba(255,255,255,0.3)", // difuminado
    borderRadius: 1,
  },
}));

// 🔹 Icono personalizado
const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "rgba(255,255,255,0.2)", // difuminado
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
    transform: "scale(1.1)",
    backgroundImage:
      "linear-gradient(136deg, #3300fc 0%, #95008a 50%, #eb0000 100%)",
  },
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, #3300fc 0%, #95008a 50%, #eb0000 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, #3300fc 0%, #95008a 50%, #eb0000 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;
  const section = sections[Number(icon) - 1];
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {section?.icon}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default function NavStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  // Navegación manual
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

    }
  };

  // IntersectionObserver para sincronizar con scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      {
        threshold: 0.29,


      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SpeedDial
      ariaLabel="Navigation menu"
      direction="down"
      sx={{
        position: "fixed", top: 16, left: 16,
        alignItems: "normal",

      }}
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
      icon={<MenuIcon />}
      open={open}
      onOpen={() => setOpen(true)}

      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}


    >
      <Collapse in={open} unmountOnExit >
        <Stack
          sx={{
            color: "white",
            backdropFilter: "blur(6px)",
            borderRadius: 2,
            p: 2,
          }}

        >
          <Stepper
            orientation="vertical"
            connector={<ColorlibConnector />}
            activeStep={activeStep}
            sx={{
              pointerEvents: "auto"
            }}
          >
            {sections.map((section, index) => (
              <Step key={section.id}>
                <StepLabel
                  StepIconComponent={ColorlibStepIcon}
                  onClick={() => handleClick(section.id)}
                  sx={{
                    pointerEvents: "auto",
                    "& .MuiStepLabel-label": {
                      color: "white", // fuerza el color del texto
                    },
                  }}


                >
                  {t(`nav.${section.id}`)}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </Collapse>
    </SpeedDial>
  );
}