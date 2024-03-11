import React from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Content from './components/Content'; // This is your main content component
import Dashboard from './components/Dashboard';
import { Container, Grid } from '@mui/material';

function Layout({ children }) {
    return (
        <div>
            <TopBar />
            <Grid container sx={{ pt: 8 }}>
                <Grid item xs={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={9}>
                    <Dashboard />
                    <main>
                        {children} {/* This is where the content of each page will be rendered */}
                    </main>
                </Grid>
            </Grid>
        </div>
    );
}

export default Layout;