import React from 'react';

function NameList() {
  const names = ["John", "Jane", "Alex"];

  return (
    <div>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;