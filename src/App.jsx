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
import { supabase } from './supabaseClient';




function App() {
 const [session, setSession] = useState(null);


   useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSession(null)
        } else if (session) {
          setSession(session);
        }
      })
    return () => {
      subscription.unsubscribe;
    }
  }, [])
 
  return (
    <>
    {session ? (
      <>
       <Layout>    
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        🚨 Welcome to AdSiren! 🚨
        </Typography>
        <Typography varient="h6" component="h2" sx={{ mb: 2, mt: 2}}>
          Wee woo wee woo wee woo
        </Typography>
        
          
        </Layout>
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
