import {Box, Typography} from '@mui/material';

export default function LogoWithText() {
  return (
    <Box
      {...{
        flex: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
      }}>
      <img
        style={{maxHeight: 60, maxWidth: 60}}
        src="/images/logo.png"
        alt="logo"
      />
      <Typography variant="h6">Tarlac Agricultural University </Typography>
    </Box>
  );
}
