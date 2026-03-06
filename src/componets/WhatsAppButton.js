import React from 'react';
import Button from 'react-bootstrap/Button';
import { WhatsApp } from '@mui/icons-material';
import "./index.css"
import { useTranslation } from "react-i18next";

const WhatsAppButton = () => {
    const { t } = useTranslation();
    const handleWhatsAppClick = () => {
        // Reemplaza con tu número de WhatsApp
        const phoneNumber = '5534264239';
        const message = t('whatsapp.boton');

        // Genera el enlace de WhatsApp
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abre una nueva ventana o pestaña con el chat de WhatsApp
        window.open(whatsappLink, '_blank');
    };

    return (
        <Button  className="wa"variant="success" onClick={handleWhatsAppClick}>
           <WhatsApp></WhatsApp> {t('whatsapp.boton')}
        </Button>
    );
};

export default WhatsAppButton;