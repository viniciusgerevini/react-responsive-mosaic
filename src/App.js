import React, { useState } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from './dnd/HTML5toTouch';
import DraggableGridItem from './dnd/DraggableGridItem';
import Grid from './grid/Grid';
import initialItems from './initialData';

export default function App() {
  const [ list, setList ] = useState(initialItems);

  const onDrop = (firstItemId, secondItemId) => {
    let newList = [ ...list ];
    let firstItem = newList.find(i => i.id === firstItemId);
    let secondItem = newList.find(i => i.id === secondItemId);
    const firstIndex = firstItem.index;
    firstItem.index = secondItem.index;
    secondItem.index = firstIndex;
    setList(newList);
  };

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <AppWrapper>
        <h1>Responsive Drag-and-Drop Grid</h1>
        <Grid>
          { list.sort(sortItems).map(item =>
            <DraggableGridItem
              key={item.id}
              item={item}
              onDrop={onDrop}
            >{item.content}</DraggableGridItem>
          )}
        </Grid>
      </AppWrapper>
    </DndProvider>
  );
}

const sortItems = (a, b) => a.index - b.index;

const AppWrapper = styled.div `
  padding: 10px 200px;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;
