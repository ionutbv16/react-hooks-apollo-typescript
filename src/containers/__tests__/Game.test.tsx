import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router';
import wait from 'waait';
import Game, { getGameWinner, STARSHIPS_QUERY} from '../Game'; 
import  {itemsMock, mocks, gameInput, gameResult} from '../../mocks/mocks'; 
import { PARAM_PEOPLE } from '../../config';

describe('Test Game Page', () => {
    it('should render Game without error', async () => {
        await act(async () => {
            const component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter>
                <Game />
                </MemoryRouter>
            </MockedProvider>,
            );
            await wait(0);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    it('function getGameWinner should return proper number of results', () => {
        const input = gameInput
        const param = PARAM_PEOPLE
        const result = gameResult
        expect(getGameWinner(input)).toHaveLength(2);
    });
})
