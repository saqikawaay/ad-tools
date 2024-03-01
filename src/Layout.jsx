import React from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Content from './components/Content'; // This is your main content component

function Layout({ children }) {
    return (
        <div>
            <TopBar />
            <SideBar />
            <main>
                {children} {/* This is where the content of each page will be rendered */}
            </main>
        </div>
    );
}

export default Layout;