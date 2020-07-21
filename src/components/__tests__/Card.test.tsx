import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Card from '../Card';

describe('Test Card Component', () => {
    it('should render Loading without error', () => {
    const props = {
        name: 'People'
    }
    const component = renderer.create(<MemoryRouter><Card {...props} /></MemoryRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    });
});
