import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Box } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#1976d2"
        ariaLabel="loading"
      />
    </Box>
  );
};

export default LoadingSpinner;
