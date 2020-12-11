import React from 'react';
import './App.css';
import RouterView from 'components/RouterView';
import routes from 'routing';
import { RouteContextProvider } from 'contexts';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@material-ui/core';

function App() {
    return (
        <Box>
            <RouteContextProvider routes={routes}>
                <Router>
                    <RouterView></RouterView>
                </Router>
            </RouteContextProvider>
        </Box>
    );
}

export default App;
