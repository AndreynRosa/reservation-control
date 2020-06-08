import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { SpacesProvider } from './hooks/spaces';

function App() {
  return (
    <>
      <SpacesProvider>
        <Routes />
      </SpacesProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
