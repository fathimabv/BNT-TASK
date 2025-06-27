// counter
// import './App.css';
// import Counter from './components/Counter';
// function App() {
//   return (
//    <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>React Counter</h1>
//       <Counter />
//     </div>
//   );
// }
// export default App;

// import React from 'react';
// import Toggle from './components/Toggle'; 

// function App() {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <Toggle />
//     </div>
//   );
// }

// export default App;

// parentchild
// import React from 'react';
// import ParentComponent from './ParentComponent';

// function App() {
//   return (
//     <div>
//       <ParentComponent />
//     </div>
//   );
// }
// export default App;

// Grandparent-parent-child
// import React from 'react';
// import GrandParent from './GrandParent';

// function App() {
//   return (
//     <div className="App">
//       <GrandParent />
//     </div>
//   );
// }
// export default App;

// NameList
// import React from 'react';

// function NameList() {
//   const names = ["John", "Jane", "Alex"];
//   return (
//     <div>
//       <h2>Name List</h2>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default NameList;

// // checkbox
// import React from 'react';
// import CheckboxMessage from './CheckboxMessage';

// function App() {
//   return (
//     <div className="App">
//       <CheckboxMessage />
//     </div>
//   );
// }
// export default App;

// controlinput
// import React from 'react';
// import ControlledInput from './ControlledInput';

// function App() {
//   return (
//     <div className="App">
//       <ControlledInput />
//     </div>
//   );
// }
// export default App;

// ToDoApp
// import React from 'react';
// import TodoApp from './TodoApp';

// function App() {
//   return (
//     <div className="App">
//       <TodoApp />
//     </div>
//   );
// }
// export default App;

// inputfield
import React, { useState } from 'react';
import InputField from './InputField';

function App() {
  const [formData, setFormData] = useState({ username: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h2>Reusable Input Example</h2>
      <InputField
        label="Username"
        name="username"
        placeholder="Enter your username"
        onChange={handleChange}
      />
      <p>You typed: {formData.username}</p>
    </div>
  );
}
export default App;