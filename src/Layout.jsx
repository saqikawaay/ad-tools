import React from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Content from './components/Content'; // This is your main content component
import Dashboard from './components/Dashboard';
import { Container } from '@mui/material';

function Layout({ children }) {
    return (
        <div>
            <Container>
            <TopBar />
            <SideBar />
            <main>
                {children} {/* This is where the content of each page will be rendered */}
            </main>
            <Dashboard />
            </Container>
        </div>
    );
}

export default Layout;