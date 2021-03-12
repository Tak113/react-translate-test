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

const initialState = {
  name: 'Ken',
  font: 'katakana',
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [name, setName] = useState('Ken');
  const [font, setFont] = useState('katakana');

  const handleSubmit = event => {
    event.preventDefault();
    setName(formData.name)
    setFont(formData.font)
    // console.log(formData)
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
      <h1>Your Name in Japanese Calligraphy Tshirt</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Your English Name :</p>  
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Font Type</p>
            <div className='radio-container'>
              <div>
                <label>Katakana : </label>
                <input
                  type='radio'
                  name='font'
                  value='katakana'
                  onChange={handleChange}
                  checked={formData.font==='katakana'}
                  className='radio-button'
                />
              </div>
              <div>
                <label>Hiragana : </label>
                <input
                  type='radio'
                  name='font'
                  value='hiragana'
                  onChange={handleChange}
                  checked={formData.font==='hiragana'}
                  className='radio-button'
                />
              </div>
            </div>
          {/*
            <select
              name='font'
              onChange={handleChange}
              value={formData.font}
            >
              <option value="hiragana">Hiragana</option>
              <option value="katakana">Katakana</option>
            </select>
          */}
          </label>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
      <Convert
        text={name}
        language='en'
        fontType={font}
      />
      <a href="http://www.goo.ne.jp/">
        <img
          className="goo-image"
          src="//u.xgoo.jp/img/sgoo.png"
          alt="supported by goo"
          title="supported by goo"
         />
      </a>
    </div>
  );
}

export default App;
