import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CardComp from '../components/Card';
import Loading from '../components/Loading';
import { ICards, ParamTypes, SetIsWinner } from '../types';
import { NUMBER_GAME_CARDS, PARAM_PEOPLE } from '../config';

const Wrapper = styled.div` 
  padding: 20px;
`;

const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

const MUTATION_ADD_ITEM_TO_HISTORY = gql`
  mutation ($game: Any!) {
    addItemToHistory(game: $game) @client
  }
`
 
export const PEOPLE_QUERY = gql`
  query { allPersons {
      id,
      name,
      height
    }
  }
`;

export const STARSHIPS_QUERY = gql`
  query { allStarships {
      id,
      name,
      hyperdriveRating
    }
  }
`;

export const getGameWinner:any = (cards:any, param:any) => {
  let compareColumn: string = 'hyperdriveRating'
  let biggestSoFar: number = 0;
  let setIsWinner: SetIsWinner = { index: 0, winner: false}
  let cardsWinner: ICards[] = [] 
  if (param === PARAM_PEOPLE) {
    compareColumn = 'height'
  }
  cards.forEach ( (card:any, index:number) => {
    if (card[compareColumn] === biggestSoFar) {
          setIsWinner.winner = false	
    }
    if (card[compareColumn] > biggestSoFar) {
      biggestSoFar = card[compareColumn]
      setIsWinner.winner = true	
      setIsWinner.index = index	
    }
  })

  cards.forEach ( (card:any, index:number) => {
    if (index === setIsWinner.index && setIsWinner.winner === true ) {
      cardsWinner.push({...card, type:param, winner: setIsWinner.winner})
    }
    else {
      cardsWinner.push({...card, type:param, winner: false})
    }
  })
  return cardsWinner;

}

const Game: React.FC<RouteComponentProps> = () => {
  let params = useParams<ParamTypes>();
  const [cards, setCards] = useState<ICards[]>([]);

  let executeQuery: any

  if (params.type === PARAM_PEOPLE) {
    executeQuery = PEOPLE_QUERY
  }
  else {
    executeQuery = STARSHIPS_QUERY
  }
  const [ addItemToHistory ] = useMutation(
    MUTATION_ADD_ITEM_TO_HISTORY,
    { variables: { game: cards } }
  )

  const { data, loading } = useQuery<any>(executeQuery);

  useEffect(() => {
    const dbEndpoint: string = (params.type === PARAM_PEOPLE) ? 'Persons' : 'Starships'
    if (data[`all${dbEndpoint}`] && cards.length < 1)  {
      const twoCards: any = data[`all${dbEndpoint}`].sort(() => Math.random() - Math.random()).slice(0, NUMBER_GAME_CARDS)
      setCards( getGameWinner (twoCards, params.type));
      
    }
    if (cards.length > 1) {
      addItemToHistory()
    }
    
  }, [data, cards]);

  const renderCards = () => {
    if (cards.length > 0) {
       return cards.map((item: ICards) => <CardComp key={item.id} id={item.id} name={item.name} height={item.height} hyperdriverating={item.hyperdriveRating} winner={item.winner} type={item.type} />);
    }
  };

  return (
    <Wrapper>    
      <ActionBar>A Winner needs to have unique biggest value, duplicated biggest value makes no winner. </ActionBar>
      <CardsWrapper>
      {loading ? <Loading /> : renderCards()}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Game;
