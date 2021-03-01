import React, { useState } from 'react';


import Convert from './convert.js';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Put your english name :  
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </form>
      {name} is translated into :
      {
        name ?
        <Convert
          text={name}
          language='en'
        />
        : null
      }
    </div>
  );
}

export default App;
