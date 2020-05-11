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

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149);
  }
`;
