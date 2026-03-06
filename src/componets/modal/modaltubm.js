import React from 'react'
import "./embla.css"
import { Card, CardMedia } from '@mui/material';



export const Thumb = ({ selected, src, index, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
      sx={{
        width: 80,
        height: 60,
        cursor: "pointer",
        border: selected ? "2px solid #fff" : "2px solid transparent",
        transition: "border 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: 1,
        m: 0.5
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={`Thumb ${index + 1}`}
         
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: selected ? 1 : 0.6
        }}
      />
    </Card>
  );
};
