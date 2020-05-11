import React from 'react';
import { render } from '@testing-library/react';
import GridItem from './GridItem';

describe('GridItem test', () => {
  test('renders content', () => {
    const { getByText } = render(<GridItem>Hi there!</GridItem>);
    const element = getByText(/Hi there!/i);
    expect(element).toBeInTheDocument();
  });
});

