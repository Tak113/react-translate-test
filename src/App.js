import React, { useState } from 'react';
import GlobalFonts from './font/fonts.js';

import Convert from './convert/convert.js';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <GlobalFonts />
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
        :
        <Convert
          text="Ken"
          language="en"
        />
      }
    </div>
  );
}

export default App;
