import React from 'react';
import Parent from './Parent';

function GrandParent() {
  const message = "Hello from GrandParent";
  return (
    <div>
      <h1>GrandParent Component</h1>
      <Parent message={message} />
    </div>
  );
}

export default GrandParent;