import { useState } from 'react';
import Login from './components/Login';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import { Typography } from '@mui/material';
import theme from './theme';
import Layout from './Layout';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);




  // const handleLogout = () => {
  //   // logout logic would go here
  //   setIsLoggedIn(false);
  // };



  return (
    <>
    {isLoggedIn ? (
      <>
       <Container maxWidth="sm">
       <Box sx={{ bgcolor: 'white', height: '100vh' }}>      
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome to the app!
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
