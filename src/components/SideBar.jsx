import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
    return (
        <Drawer variant="permanent">
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                {/* Replace this with your logo */}
                <svg width="100" height="100">
                    <rect width="100" height="100" style={{ fill: 'grey' }} />
                </svg>
            </Box>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}