import React from 'react';
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import { CardProps } from '../types';


const Wrapper = styled.div`
  font-size: 14px;
  flex:2;
  padding: 14px;
  display: flex;
  align-items: center;
  :hover {
    box-shadow: 0px 1px 2px 0px #d3d3d3;
  }
`;

const CardRow = styled.div`
  flex: 2;
  padding: 15px;
`;

const CardWinner = styled.div`
  flex: 2;
  padding: 15px;
  font-weight: bold;
  color: green
`;

const CardLoser = styled.div`
  flex: 2;
  padding: 15px;
  font-weight: bold;
`;

const LinkWrapper = styled.div`
  color: #006699;
  text-decoration:none;
  font-weight: bold;
`;


const CardComp: React.FC<CardProps> = ({ id, name, hyperdriverating, height, type, winner }) => (
  <Wrapper>
    <Card>
      {type && <CardRow> {name}</CardRow>}
      { (type === 'People') &&  <CardRow>Height: {height}</CardRow>} 
      { (type === 'Starships') &&  <CardRow>Hyperdrive Rating: {hyperdriverating}</CardRow>} 
      { type && ( winner ? <CardWinner>Winner</CardWinner> : <CardLoser>Loser</CardLoser> ) } 
      { !type  && <CardRow><Link to={`/game/${name}`} ><LinkWrapper>{name}</LinkWrapper></Link></CardRow> }
    </Card>
  </Wrapper>
);

export default CardComp;
