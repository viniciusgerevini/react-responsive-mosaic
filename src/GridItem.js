import React from 'react';
import './GridItem.css';

export default function GridItem(props) {
  const { children } = props;

  return (
    <div className="grid-item">
      <div>
        {children}
      </div>
    </div>
  );
}
