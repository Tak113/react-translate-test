import React, { useState, useReducer } from 'react';
import GlobalFonts from './font/fonts.js';

import {Fieldset,
        RadioContainer,
        RadioButton,
        ImageContainer,
        GooImage,
        SubmitButton,
        TextFieldName,
        RadioGroupContainer,
        FormLabelContainer,
        Wrapper,
        WrapperContainerForm,
        WrapperContainerImage,
        TitleText,
        ParagraphText,
        } from './App.styles';

import Convert from './convert/convert.js';

import { makeStyles } from '@material-ui/core/styles';
import {Container,
        FormLabel,
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

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
    <Container maxWidth = 'lg'>
      <GlobalFonts />
      <TitleText>Your Name in Japanese Calligraphy Tshirt</TitleText>
      <Wrapper>
        <WrapperContainerForm>
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
              size='large'
            >
              Submit
            </SubmitButton>
          </form>
          <ParagraphText>Put your english name, select japanese font type, and submit. You will see your name in japanese calligraphy on Tshirt!</ParagraphText>
          <ParagraphText>*This is not a final version, but is based on google and goo translate API. Once we receive your order we will manually confirm to make sure we translate correctly.</ParagraphText>
          <ParagraphText>*There are few translation bugs and we don't gurantee the translation used in the app</ParagraphText>
        </WrapperContainerForm>
        <WrapperContainerImage>
          <Convert
            text={name}
            language='en'
            fontType={font}
          />
          <ImageContainer href="http://www.goo.ne.jp/">
            <GooImage
              className="goo-image"
              src="//u.xgoo.jp/img/sgoo.png"
              alt="supported by goo"
              title="supported by goo"
            />
          </ImageContainer>
        </WrapperContainerImage>
      </Wrapper>
    </Container>
  );
}

export default App;
