import React from 'react'
import {Stack, Grid, Modal, CircularProgress, Backdrop, Typography}from '@mui/material';
import Box from '@mui/material/Box';

 const LoaderSpiner = () => {
 
      return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      )
  
  
}

export  default LoaderSpiner
