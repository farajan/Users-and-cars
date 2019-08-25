import React from 'react'
import AppBar from './AppBar'
import { Container } from 'semantic-ui-react';

const Layout = ({children}) => {
    return(
        <div>
            <AppBar />
            <Container style={{ marginTop: '2em', marginLeft: '10%', marginRight: '10%' }}>
                {children}
            </Container>
        </div>
    );
}

export default Layout;