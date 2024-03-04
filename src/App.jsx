import { useState, useEffect } from 'react';
import Login from './components/Login';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import { Typography } from '@mui/material';
import theme from './theme';
import Layout from './Layout';
import { checkSession, supabaseAuthListener } from './components/authClient';

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  //check if there's a current session: 
  const session = checkSession();
  setIsLoggedIn(!!session);
  //subscribe to session changes
  const { data: listener } = supabaseAuthListener((event, session) => {
  setIsLoggedIn(!!session);
  });

  return () => {
    listener.unsubscribe();
  };
}, []);





  return (
    <>
    {isLoggedIn ? (
      <>
       <Container maxWidth="sm">
       <Box sx={{ bgcolor: 'white', height: '100vh' }}>      
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        🚨 Welcome to the AdSiren! 🚨
        </Typography>
        <Layout>
          
        </Layout>
        </Box>
      </Container>
      </>
    ) : (
      <>
      <Container maxWidth="xs">
       <Box sx={{ bgcolor: 'white', height: '80vh' }}>     
      <Login />
      </Box>
      </Container>
      </>
    )}
  </>
  )
}

export default App
