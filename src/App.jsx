// import React from 'react';
// import AppRoutes from './components/Routes';

// function App() {
//   return (
//     <div className="container py-4">
//       <AppRoutes />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'

function App() {
  const [first, setfirst] = useState(0)

  const increment = () => {
    setfirst(first + 1)
  }

  const decrement = () => {
    setfirst(first - 1)
  }
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App