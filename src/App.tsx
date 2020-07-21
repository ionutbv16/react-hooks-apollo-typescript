import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import apolloClient from './graphql/apolloClient';
import Topbar from './components/topbar/Topbar';
import AppRouter from './AppRouter';

const AppWrapper = styled.div`
  padding:2px;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AppWrapper>
        <Topbar />
        <Wrapper>
          <AppRouter />
        </Wrapper>
      </AppWrapper>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
