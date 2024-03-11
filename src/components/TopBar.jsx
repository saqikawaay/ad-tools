import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { supabase } from '../supabaseClient';
import AccountPicker from './AccountPicker';


async function handleLogout() {
  const { data, error } = await supabase.auth.signOut()
  if (error) console.log('Error logging out:', error.message)
}



export default function TopBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Typography 
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: {xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 'bold',
            letterSpacing: '0.3rem', 
            color: 'inherit',
            textDecoration: 'none',
          }}>
            AdSiren
          </Typography>
           <Box sx={{ flexGrow: 3, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }} >
            <AccountPicker />
          </Box>

           <Box sx={{ flexGrow: 1, display: { sx: 'none', md: 'flex' } }} >
            <Menu
              anchorEl={anchorEl}
              keepMounted
              marginThreshold={0}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
          

          <Button onClick={handleClick}>
              <Avatar /> {/* Replace this with your avatar */}
            </Button>
          </Toolbar>
          </Container>

      </AppBar>
    );
}