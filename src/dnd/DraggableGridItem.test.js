import React from 'react';
import { render } from '@testing-library/react';
import DraggableGridItem from './DraggableGridItem';
import dnd from './useDragAndDrop';

jest.mock('./useDragAndDrop', () => {
  return {
    useDragAndDrop: jest.fn().mockReturnValue({ isDragging: false })
  }
});

describe('DraggableGridItem test', () => {
  const fakeDropAction = jest.fn();
  let item1;
  let item2;

  beforeEach(() => {
    jest.clearAllMocks();
    item1 = { id: '123', index: 1 };
    item2 = { id: 'abc', index: 2 };
  });

  test('renders children', () => {
    const { getByText } = render(<DraggableGridItem item={item1} onDrop={fakeDropAction}><div>someChildren</div></DraggableGridItem>);

    expect(getByText('someChildren')).toBeInTheDocument();
  });

  test('calls drop action when drag happens', () => {
    const fakeMonitor = { getClientOffset: () => ({}) };
    render(<DraggableGridItem item={item1} onDrop={fakeDropAction} />);

    const { hover } = dnd.useDragAndDrop.mock.calls[0][1];
    hover(item2, fakeMonitor);

    expect(fakeDropAction).toHaveBeenCalledWith(item2.id, item1.id);
  })

  test('changes item index when drag happens', () => {
    const fakeMonitor = { getClientOffset: () => ({}) };
    render(<DraggableGridItem item={item1} onDrop={fakeDropAction} />);

    const { hover } = dnd.useDragAndDrop.mock.calls[0][1];
    const targetItem = { ...item2  }
    hover(targetItem, fakeMonitor);

    expect(targetItem.index).toEqual(item1.index);
  });

  test('does not trigger drop action if target and source index are the same', () => {
    const fakeMonitor = { getClientOffset: () => ({}) };
    render(<DraggableGridItem item={item1} onDrop={fakeDropAction} />);

    const { hover } = dnd.useDragAndDrop.mock.calls[0][1];
    hover(item1, fakeMonitor);

    expect(fakeDropAction).not.toHaveBeenCalled();
  });

  test('does not trigger drop action if drag not activated downwards or right to left', () => {
    const fakeMonitor = { getClientOffset: () => ({ y: -1, x: -1 }) };
    render(<DraggableGridItem item={item2} onDrop={fakeDropAction} />);

    const { hover } = dnd.useDragAndDrop.mock.calls[0][1];
    hover(item1, fakeMonitor);

    expect(fakeDropAction).not.toHaveBeenCalled();
  });

  test('does not trigger drop action if drag not activated upwards or left to right', () => {
    const fakeMonitor = { getClientOffset: () => ({ y: 1, x: 1 }) };
    render(<DraggableGridItem item={item1} onDrop={fakeDropAction} />);

    const { hover } = dnd.useDragAndDrop.mock.calls[0][1];
    hover(item2, fakeMonitor);

    expect(fakeDropAction).not.toHaveBeenCalled();
  });

  test('changes oppacity when item is being dragged', () => {
    dnd.useDragAndDrop.mockReturnValue({ isDragging: true });

    const { container } = render(<DraggableGridItem item={item1} onDrop={fakeDropAction} />);
    const noteCard = container.firstChild;

    expect(noteCard.style.opacity).toEqual("0");
  });
});
