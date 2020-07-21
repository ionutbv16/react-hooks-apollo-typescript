import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router';
import wait from 'waait';
import History  from '../History'; 

describe('Test History Page', () => {
it('should render History without error', async () => {
  await act(async () => {
    const component = renderer.create(
      <MockedProvider addTypename={false}>
        <MemoryRouter>
          <History />
        </MemoryRouter>
      </MockedProvider>,
    );
    await wait(0);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
});
