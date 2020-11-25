import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './hooks/users';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <UsersProvider>
          <Routes />
        </UsersProvider>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default App;
