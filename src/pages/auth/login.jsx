import {Box, Typography} from '@mui/material';

export default function Login() {
  return (
    <Box>
      <img
        style={{
          position: 'absolute',
          opacity: '0.5',
          maxWidth: '100%',
          maxHeight: '100%',
          left: '30%',
          top: '5%',
        }}
        src="/images/background.png"
        alt="background"
      />
      <Box {...{position: 'fixed', margin: 8}}>
        <Typography variant="h4">
          Welcome to Electronic Gatepass Command Center
        </Typography>
      </Box>
    </Box>
  );
}
