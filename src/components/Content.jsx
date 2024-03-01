import React from 'react';
import { Container } from '@mui/material';

function Content({ children }) {
    return (
        <Container maxWidth="lg">
            {children}
        </Container>
    );
}

export default Content;