import React, { useState, useReducer } from 'react';
import GlobalFonts from './font/fonts.js';
import './App.css';

import Convert from './convert/convert.js';

const formReducer = (state, event) => {
  return{
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [name, setName] = useState('Ken');
  const [font, setFont] = useState('katakana');

  const handleSubmit = event => {
    event.preventDefault();
    setName(formData.name)
    setFont(formData.font)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  return (
    <div className='wrapper'>
      <GlobalFonts />
      <h1>Your Name in Japanese Tshirt</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Your English Name :</p>  
            <input
              type='text'
              name='name'
              value={formData.name || ''}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Font Type</p>
            <select
              name='font'
              onChange={handleChange}
              value={formData.font || 'katakana'}
            >
              <option value="hiragana">Hiragana</option>
              <option value="katakana">Katakana</option>
            </select>
          </label>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
      <Convert
        text={name}
        language='en'
        fontType={font}
      />
    </div>
  );
}

export default App;
