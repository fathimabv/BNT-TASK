import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      <ChildComponent message="Good morning" />
    </div>
  );
}

export default ParentComponent;