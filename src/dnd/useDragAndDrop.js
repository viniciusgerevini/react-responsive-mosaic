import { useDrag, useDrop } from 'react-dnd';

export function useDragAndDrop(ref, payload) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'GRID_ITEM', ...payload },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'GRID_ITEM',
    hover: payload.hover
  })

  drag(drop(ref));

  return {
    isDragging
  }
}

export default { useDragAndDrop };
