import React, { useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalFonts from './font/fonts.js';
import queryString from 'query-string';
import Gnav from './gnav.js';
import Footer from './footer.js';
import ReactGA from "react-ga4";
import Slider from "react-slick";

import {Fieldset,
        RadioContainer,
        RadioButton,
        ImageContainer,
        GooImage,
        SubmitButton,
        TextFieldName,
        RadioGroupContainer,
        FormLabelContainer,
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
        Tooltip,
        } from '@material-ui/core';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const formReducer = (state, event) => {
  return{  
    ...state,
    [event.name]: event.value
  }
}

const initialState = {
  name: '',
  font: '',
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App(props) {
  ReactGA.initialize("G-YEBR4551EL");
  ReactGA.send("pageview");

  const qs = queryString.parse(useLocation().search)
  console.log("qs", qs);
  const [name, setName] = useState(qs.name);
  const [font, setFont] = useState('hiragana');
  const [formData, setFormData] = useReducer(formReducer, {name: name, font: font});

  const handleSubmit = event => {
    event.preventDefault();
    setName(formData.name)
    setFont(formData.font)
    let path = "/?name=" + formData.name + "&font=" + formData.font; 
    console.log("send ga", path)
    ReactGA.send({ hitType: "pageview", page: path });
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  const handleBlur = event => {
    setName(formData.name)
    setFont(formData.font)
  }

  const slider_sp = {
      className: "slider_sp",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
  };
  const slider_pc = {
      className: "slider_pc",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
  };
  const class_no_inventory = qs.name ? "direct": "no-inventory";

  return (
    <Container maxWidth = 'lg'>
      <Gnav />
      <GlobalFonts />
      <div className="mio-container">
        <div className="header">
          <h1 className="for-sale">Special Order is Now On Sale with No Extra Charge.</h1>
          <p className={class_no_inventory}>- Sorry, We don't have an inventory for the name. -</p>
        </div>
        <div className="samples">
          <p>Your japanese calligraphy can be created by following font type. If you like it, please proceed with “Go to Special Order” to order your personalized product. </p>
          <Slider {...slider_pc}>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f29269739_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f25def567_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f22bc0348_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f1f640829_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f17a1a69d_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f13ded3ef_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f108b098c_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f0d060e3d_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f08ec9ee4_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f08ec9ee4_370x.progressive.jpg" /></div>
          </Slider>
          <Slider {...slider_sp}>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f29269739_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f25def567_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f22bc0348_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f1f640829_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f17a1a69d_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f13ded3ef_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f108b098c_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f0d060e3d_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f08ec9ee4_370x.progressive.jpg" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0553/2978/4000/products/unisex-premium-viscose-hemp-t-shirt-snowflake-front-61f4f08ec9ee4_370x.progressive.jpg" /></div>
          </Slider>
        </div>
	<p>Meanwhile, you can simulate what your japanese calligraphy looks. Put your english name and select japanese font type, and you will see your name in japanese calligraphy on Tshirt!</p>
        <div className="tshirt">
          <div className="form">
            <form>
              <TextFieldName
                id='standard-secondary'
                label='Your English Name'
                color='secondary'
                name='name'
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormLabelContainer component='legend'>Font Type</FormLabelContainer>
              <RadioGroupContainer aria-label='fonttype' name='fonttype'>
                <FormControlLabel value='katakana' label='Katakana' control={
                  <Tooltip title = "Hiragana and katakana are the two syllabaries in Japanese. Hiragana is used to form the grammar of the sentence and katakana is used primarily to write words that have been imported from other languages, e.g. coffee, table, and so forth."
                   arrow>
                    <Radio
                      name='font'
                      value='katakana'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={formData.font==='katakana'}
                    />
                  </Tooltip>
                }/>
                <FormControlLabel value='hiragana' label='Hiragana' control={
                  <Tooltip title = "Hiragana and katakana are the two syllabaries in Japanese. Hiragana is used to form the grammar of the sentence and katakana is used primarily to write words that have been imported from other languages, e.g. coffee, table, and so forth."
                   arrow>
                    <Radio
                      name='font'
                      value='hiragana'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={formData.font=='hiragana'}
                    />
                  </Tooltip>
                }/>
              </RadioGroupContainer>
            </form>
          </div>
          <div className="image">
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
          </div>
        </div>
        <div className="conversion">
          <a href="https://shop.mionosuke.com/pages/special-order">Go to Special Order</a>
	  <p>If you like it, please proceed with "Go to Special Order" to order your personalized product.</p>
	  <p className="note">*This is not a final version, but is based on google and goo translate API. Once we receive your order we will manually confirm to make sure we translate correctly.</p>
	  <p className="note">*The simulation here goes with horizontal direction, but you can choose either vertical (traditional) or horizontal. Please specify when you are in special order.</p>
	  <p className="note">*There are few translation bugs and we don’t gurantee the translation used in the app</p>
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
