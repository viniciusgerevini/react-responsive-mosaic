import React from 'react';
import styled from 'styled-components';

export default function GridItem(props) {
  const { children } = props;

  return (
    <GridItemWrapper>
      <div>
        {children}
      </div>
    </GridItemWrapper>
  );
}

const GridItemWrapper = styled.div `
  width: auto;
  min-width: 240px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  line-height: 1.2em;
  word-wrap: break-word;
  user-select: none;
`;
