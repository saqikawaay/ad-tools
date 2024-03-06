import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Avatar } from '@mui/material';
import { supabase } from '../supabaseClient';

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
        <Toolbar>
          
          <Typography variant="h6">
            AdSiren
          </Typography>
          <div>
            <Button onClick={handleClick}>
              <Avatar /> {/* Replace this with your avatar */}
            </Button>
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
          </div>
        </Toolbar>
      </AppBar>
    );
}