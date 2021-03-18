import React, { useState, useReducer } from 'react';
import GlobalFonts from './font/fonts.js';

import {Fieldset,
        Wrapper,
        RadioContainer,
        RadioButton,
        GooImage,
        SubmitButton,
        TextFieldName,
        RadioGroupContainer,
        FormLabelContainer,
        } from './App.styles';

import Convert from './convert/convert.js';
import {FormLabel,
        RadioGroup,
        FormControlLabel,
        Radio,
        } from '@material-ui/core';

const formReducer = (state, event) => {
  return{  
    ...state,
    [event.name]: event.value
  }
}

const initialState = {
  name: 'Edward',
  font: 'hiragana',
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [name, setName] = useState('Edward');
  const [font, setFont] = useState('hiragana');

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
    <Wrapper>
      <GlobalFonts />
      <h1>Your Name in Japanese Calligraphy Tshirt</h1>
      <form onSubmit={handleSubmit}>
        <TextFieldName
          id='standard-secondary'
          label='Your English Name'
          color='secondary'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />

        <FormLabelContainer component='legend'>Font Type</FormLabelContainer>
        <RadioGroupContainer aria-label='fonttype' name='fonttype'>
          <FormControlLabel value='katakana' label='Katakana' control={
            <Radio
              name='font'
              value='katakana'
              onChange={handleChange}
              checked={formData.font==='katakana'}
            />
          }/>
          <FormControlLabel value='hiragana' label='Hiragana' control={
            <Radio
              name='font'
              value='hiragana'
              onChange={handleChange}
              checked={formData.font=='hiragana'}
            />
          }/>
        </RadioGroupContainer>

        <SubmitButton
          type='submit'
          variant='contained'
          color='default'
        >
          Submit
        </SubmitButton>
        
      </form>
      <Convert
        text={name}
        language='en'
        fontType={font}
      />
      <a href="http://www.goo.ne.jp/">
        <GooImage
          className="goo-image"
          src="//u.xgoo.jp/img/sgoo.png"
          alt="supported by goo"
          title="supported by goo"
         />
      </a>
    </Wrapper>
  );
}

export default App;
