import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CardComp from '../components/Card';
import { HistoryInfo } from '../types';

export const QUERY_HISTORY_INFO = gql`
  query {
    history @client {
      items    
    }
  }
`

const Wrapper = styled.div`
  padding: 20px;
`;

const ActionBar = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const History: React.FC<RouteComponentProps> = () => {
   
 const data:any  = useQuery<HistoryInfo>(QUERY_HISTORY_INFO).data

  return (
    <Wrapper>
      <ActionBar>
         History
      </ActionBar>
      {data && data.history && data.history.items.map( (itemHistory:any, index: number) => 
      (<ActionBar key={index}>
         <div key={index}>{itemHistory.date}</div>
         {itemHistory.game.map ( (item: any) => <CardComp key={item.id} id={item.id} name={item.name} height={item.height} hyperdriverating={item.hyperdriveRating} winner={item.winner} type={item.type} />) }
      </ActionBar>
      ))}
      
    </Wrapper>
  );
};

export default History;
