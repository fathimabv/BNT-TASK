// counter increase&decrease

// // import React, { useState } from 'react';
// // function Counter() {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div>
// //       <h2>Count: {count}</h2>
// //       <button onClick={() => setCount(count + 1)}>Increase</button>
// //       <button onClick={() => setCount(count - 1)}>Decrease</button>
// //     </div>
// //   );
// // }
// // export default Counter;

// counter increase
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>
        Increase Count
      </button>
    </div>
  );
}
export default Counter;