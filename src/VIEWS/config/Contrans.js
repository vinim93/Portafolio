import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        es: {
            translation: {
                inicio: {
                    titulo: "Desarrollador Fullstack",
                    email: "correo:vinim9395@gmail.com",
                    telefono: "telefono:5534264239",
                    boton: "Descargar CV"
                },
                tecnologias: {
                    titulo: "Tecnologías",
                    descripcion: "Trabajo con un stack diverso que incluye React, Material UI, Node.js, Express, MongoDB y más."
                },
                proyectos: {
                    titulo: "Proyectos",
                    descripcion: "Conoce el proyecto"
                },
                diplomas: {
                    titulo: "Diplomas",
                    descripcion: "Certificaciones y diplomas que respaldan mi formación profesional."
                },
                experiencia: {
                    titulo: "Experiencia",
                    subtituloefi: " Desarrollador fullstack(Efisoft)",
                    tiempoefi: "Tiempo de Servicio a la empresa | de [11/10/22]",
                    descripcionefi: "Maquetado web con framework react y creacion de backend en node, postman ,thunderclient, soap-ui y consumir apis, de vulnerabilades(ofuscación de código y buenas practicas de instrusion,DAST,CHERKMARKS) para bakend frontend,mediante escaneos de pipelines de gitlab configuración de imágenes Docker y nginx, configuración de pods mediante redhat-openshift (espacios persistentes, configuraciones servidores sftp para node conexion y autenticación)",
                     subtitulokapi: " Desarrollador fullstack(Kapital)",
                    tiempokapi: "Tiempo de Servicio a la empresa | de [03/03/22]",
                    descripcionkapi: "Maquetado web con framework react y next.js invocar funciones de bakend node en parse.js, creacion de modulos en bakend con parse.js crear consumir apis diversas para la validacion u creacion de reportes, usar control de versiones bit bucket, crear modulos en nest.js (typescript), gestionar actividades mediante jira y orgnizar mediante trello, slack ,consultas de la base de datos mediante mongoCompass, consulta de respuestas apis mediante node, postman ,thunderclient, consultar soap consumir mediante readyApi,crear pequeñas animaciones median three.js para implementacion 3d,",
                        subtitulosun: " Desarrollador fullstack(Sunshine Imagine)",
                    tiemposun: "Tiempo de Servicio a la empresa | de [01/11/20] a [16/09/2021]",
                    descripcionsun: "Maquetado y creación de la página web con framework De react y backend cloud engine y firebase para gestionar Inicio de sesión asi como animaciones complejas carruseles, Particles gestión de sistema de contacto en la página web Integración de pasarela de pagos (stripe), traducción de la página de idioma ingles con 1n18 paquetería, vista de pdf, Creación de aplicación mediante react-native expo consistema de autenticacion Conectado a firebase venta de tokens e intercambio de wallets maquetado y diseño responsivo",
                     subtitulotica: " Desarrollador -Administrativo",
                    tiempotica: "Tiempo de Servicio a la empresa | de [24/02/20] a [25/05/2020]",
                    descripciontica: "Gestionar y administrar el área de sistemas configurando su dominio, red, telefonía, correos, impresoras, escáner, mantenimiento del site, configuración de Windows Server, Checador de entrada, Administración telefonía mediante UCM grandstream configuración de Ubuntu para vlan. Administrar fortinet para permisos de navegación, configuración de CCTV cámaras, gestionar consola office 365 para buzones.",
                     subtitulognp: "Desarrollo Y Soporte GNP",
                    tiempognp: "Tiempo de Servicio a la empresa | Enero 2019 - Ene 2020",
                    descripciongnp: "Soporte vía remota y presencial para la instalación de los aplicativos de la empresa como: Onbase estudio, review, Report Service, Unity, wincsp. Así como configuración; Como atender tickets en correo electrónico desarrollar pequeños módulos de los aplicativosConfiguración de las tablas de las notificaciones mediante JavaScript",
                      subtitulomain: "Desarrollador Y Soporte",
                    tiempomain: "Tiempo de Servicio a la empresa | enero 2016 - dic 2018",
                    descripcionmain: "Dar soporte preventivo así como correctivo mediante atención de tickets solución y trato de usuario y configuración pc, borrados instalación de Sistemas operativo así como respaldos y migraciones (masivo de 30 equipos a 100 en un día) configuración de correo Outlook, configuración de como Software hardware, instalación de multifuncionales y soporte, configuración de antivirus.",
                },
                whatsapp:{
                    boton: "¡Contáctame por WhatsApp!"
                },
                nav:{
                    inicio: "Inicio",
                    tecnologias: "Tecnologías",
                    proyectos: "Proyectos",
                    diplomas: "Diplomas",
                    experiencia: "Experiencia"
                }
            }
        },
        en: {
            translation: {
                inicio: {
                    titulo: "Fullstack Developer",
                    email: "email:vinim9395@gmail.com",
                    telefono: "phone:5534264239",
                    boton: "Download CV"
                },
                tecnologias: {
                    titulo: "Technologies",
                    descripcion: "I work with a diverse stack including React, Material UI, Node.js, Express, MongoDB, and more."
                },
                proyectos: {
                    titulo: "Projects",
                    descripcion: "Get to know the project"
                },
                diplomas: {
                    titulo: "Certifications",
                    descripcion: "Certifications and diplomas that support my professional background."
                },
                experiencia: {
                    titulo: "Experience",
                    subtituloefi: "Fullstack Developer(Efisoft)",
                    tiempoefi: "Time of Service to the company | from [11/10/22]",
                    descripcionefi: "Web layout with react framework and backend creation in node, postman, thunderclient, soap-ui and consuming apis, of vulnerabilities (code obfuscation and good intrusion practices, DAST, CHERKMARKS) for backend frontend, through scans of gitlab pipelines configuration of Docker images and nginx, configuration of pods through redhat-openshift (persistent spaces, sftp server configurations for node connection and authentication)",
                        subtitulokapi: "Fullstack Developer(Kapital)",
                    tiempokapi: "Time of Service to the company | from [03/03/22]",
                    descripcionkapi: "Web layout with react framework and next.js, invoking functions in the backend with node.js, creating modules in the backend with parse.js, consuming various APIs for validation and report generation, using version control with bitbucket, creating modules in nest.js (typescript), managing activities through jira and organizing through trello, slack, querying the database with mongoCompass, consulting API responses with node, postman, thunderclient, consulting SOAP APIs with readyApi, creating small animations with three.js for 3D implementation,",
                     subtitulosun: "Fullstack Developer(Sunshine Imagine)",
                    tiemposun: "Time of Service to the company | from [01/11/20] to [16/09/2021]",
                    descripcionsun: "Web layout and creation with react framework and cloud engine backend and firebase to manage login as well as complex animations, carousels, Particles contact system management on the website, Stripe payment gateway integration, translation of the page into English with 1n18 package, PDF view, Creation of an application using react-native expo with authentication system connected to firebase for token sales and wallet exchange, responsive layout and design",
                        subtitulotica: "Developer -Administrative",
                    tiempotica: "Time of Service to the company | from [24/02/20] to [25/05/2020]",
                    descripciontica: "Manage and administer the systems area by configuring its domain, network, telephony, emails, printers, scanners, site maintenance, Windows Server configuration, entry checker, Telephony administration using UCM grandstream configuration of Ubuntu for vlan. Administer fortinet for navigation permissions, CCTV camera configuration, manage office 365 console for mailboxes.",
                      subtitulognp: "Development and Support GNP",
                    tiempognp: "Time of Service to the company | January 2019 - Jan 2020",
                    descripciongnp: "Remote and on-site support for the installation of the company's applications such as: Onbase studio, review, Report Service, Unity, wincsp. As well as configuration; How to attend tickets in email, develop small modules of the applications, Configuration of notification tables using JavaScript",
                      subtitulomain: "Development and Support",
                    tiempomain: "Time of Service to the company | January 2016 - Dec 2018",
                    descripcionmain: "Provide preventive as well as corrective support through ticket attention, user solution and treatment, and PC configuration, deletions, installation of operating systems as well as backups and migrations (massive from 30 to 100 equipment in one day) Outlook mail configuration, Software hardware configuration, installation of multifunctionals and support, antivirus configuration.",
                },
                whatsapp: {
                    boton: "Contact me on WhatsApp!"
                },
                nav: {
                    inicio: "Home",
                    tecnologias: "Technologies",
                    proyectos: "Projects",
                    diplomas: "Certifications",
                    experiencia: "Experience"
                }

            }
        }
    },
    lng: "en", // idioma inicial
    fallbackLng: "es",
    interpolation: { escapeValue: false }
});

export default i18n;
