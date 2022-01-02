import React, { useEffect, useState } from 'react';
import axios from 'axios';

import GooTranslate from '../goo/goo.component';
import {TshirtContainer,
        BackgroundImage,
        FontPosition,
        } from './convert.styles.js';

const Convert = ({ text, language, fontType }) => {
  // console.log(fontType);
  const [convertedText, setConvertedText] = useState('');

  //from Irie-san
  //ref : https://qiita.com/satto_sann/items/be4177360a0bc3691fdf
  const API_KEY = 'AKfycbzSMySCPJSxxCDzglgPsMelqqXzuX_zRLm7Qvv-Ol8Li2QP-fMGTb4gGA';
  
  let endPoint = 'https://script.google.com/macros/s/';
  endPoint += `${API_KEY}`;
  endPoint += `/exec?text=${text}&from=${language}&to=ja`;
  // console.log(endPoint);

  useEffect(() => {
    console.log("text", text);
    if (text) {
     const response = axios
      .get(
      	endPoint,
      )
      .then((response) => {
        
        // console.log(response.data.text)
      	setConvertedText(response.data.text);
      })
      .catch((err) => {
        console.log('rest api error', err);
      });
    }
  }, [text, language]);

  return (
    <TshirtContainer>
      <BackgroundImage />
      <FontPosition>
        <GooTranslate
          name={convertedText}
          fontType={fontType}
        />
      </FontPosition>
    </TshirtContainer>
  );
};

export default Convert;
