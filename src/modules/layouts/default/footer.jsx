import {Box, Typography} from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      {...{
        margin: '20px 45px',
        backogroundColor: '#e6e3e3',
        maxWidth: '100%',
      }}>
      <Typography>
        {'Copyright © '}
        {new Date().getFullYear()} {'All Rights Reserved.'}
      </Typography>
    </Box>
  );
};

export default Footer;
