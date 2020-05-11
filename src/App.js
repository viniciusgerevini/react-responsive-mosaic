import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from './dnd/HTML5toTouch';
import DraggableGridItem from './dnd/DraggableGridItem';
import Grid from './grid/Grid';
import GridItem from './grid/GridItem';


const initialItems = [
  { id: 1, index: 1, content: 'Hello' },
  { id: 2, index: 2, content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' },
  { id: 3, index: 3, content: 'Hey you!' },
  { id: 4, index: 4, content: 'Hi there!' },
  { id: 5, index: 5, content: 'Hola!' },
  { id: 6, index: 6, content: 'Hi' },
  { id: 7, index: 7, content: 'Whats up!' },
  { id: 8, index: 8, content: 'Sup!' },
]

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
      <div>
        <h1>Responsive Drag-and-Drop Grid</h1>
        <Grid>
          <GridItem>This is a non draggable item</GridItem>
          { list.sort(sortItems).map(item =>
            <DraggableGridItem
              key={item.id}
              item={item}
              onDrop={onDrop}
            >{item.content}</DraggableGridItem>
          )}
        </Grid>
      </div>
    </DndProvider>
  );
}

const sortItems = (a, b) => a.index - b.index;
