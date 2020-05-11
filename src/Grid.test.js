import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

describe('Grid test', () => {
  const renderComponent = ({ items }) => {
    return render(
        <Grid>
          {items.map((i, index) => <div key={index}><div>{i}</div></div>)}
        </Grid>
    );
  };

  test('renders items', () => {
    const items = [
      "hello"
    ];

    const { getByText } = renderComponent({ items });

    expect(getByText(/hello/i)).toBeInTheDocument();
  });

  it('caculates item height for grid', () => {
    const items = [
      "hello"
    ];
    const { getByText } = renderComponent({ items });

    const item = getByText('hello').parentNode;

    expect(item.style.gridRowEnd).toEqual("span 1");
  });
});

