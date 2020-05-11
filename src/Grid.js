import React, { useRef, useEffect } from 'react';
import './Grid.css';

export default function Grid(props) {
  const gridRef = useRef(null);
  const { children } = props;

  useEffect(() => {
    const grid = gridRef.current;
    adjustGridItemsHeight(grid);
  });

  return (
    <div ref={gridRef} className="grid-wrapper">
      {children}
    </div>
  );
}

const adjustGridItemsHeight = (grid) => {
  const items = grid.children;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.firstChild.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
  }
}

