import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import CardComp from '../components/Card';
import {PARAM_PEOPLE, PARAM_STARSHIPS} from '../config';

const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 20px;
`;

const ActionBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 14px;
`;

const Home: React.FC<RouteComponentProps> = () => {

  return (
    <Wrapper>
      <ActionBar>
      Start the game by selecting one of the options bellow:
      </ActionBar>
      <ActionBar>
        <CardComp name={PARAM_PEOPLE} /> 
        <CardComp name={PARAM_STARSHIPS} /> 
      </ActionBar>
    </Wrapper>
  );
};

export default withRouter(Home);
