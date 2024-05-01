import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';
import LoginForm from './loginForm';
import Footer from './footer';

export default function Layout() {
  return (
    <>
      <Box
        {...{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%',
        }}>
        <LoginForm />
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
