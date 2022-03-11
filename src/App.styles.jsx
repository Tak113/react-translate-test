import styled from 'styled-components';

import {Button,
		TextField,
		RadioGroup,
		FormLabel
		} from '@material-ui/core';

export const Fieldset = styled.fieldset`
	margin: 20px 0;
	padding-bottom: 20px;
`;

export const RadioContainer = styled.div`
	display:flex;
	// justify-content: space-between;
`;

export const RadioButton = styled.input`
	vertical-align: middle;
	margin-top: -1px;
`;

export const GooImage = styled.img`
	width: 100px;

	@media screen and (max-width: 500px) {
		width: 100px;
	}
`;

export const ImageContainer = styled.a`
	text-align: right;
	margin-top: -5em;
        display: inline-block;

	@media screen and (max-width: 500px) {
		margin-right: 1em;
	}

`;

export const SubmitButton = styled(Button)`
	&& {
		width: 100%;
		height: 45px;
		margin:20px 0 20px 0;
		color: white;
		background-color: black;
		&:hover: {
			background-color: gray;
		}
	}
`;

export const TextFieldName =styled(TextField)`
	&& {
		width: 100%;
	}
`;

export const RadioGroupContainer = styled(RadioGroup)`
	&& {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
`;

export const FormLabelContainer = styled(FormLabel)`
	&& {
		margin-top: 15px;
		font-size: 0.8rem;
	}
`;

export const Wrapper = styled.div`
	display:flex;
	flex-direction: row;
	width:100%;

	@media screen and (max-width: 1000px) {
  		flex-direction: column;
  		align-items: center;
  		width: 100%;
  	}
`;

export const WrapperContainerForm = styled.div`
	display:flex;
	flex-direction: column;
	width:40%;
	margin:40px 20px;

	@media screen and (max-width: 1000px) {
		width: 90%;
		margin: 20px 0 20px 0;
	}
`;

export const WrapperContainerImage = styled.div`
	display:flex;
	flex-direction: column;
	width:60%;
	margin: 20px;

	@media screen and (max-width: 1000px) {
		width: 90%;
		margin: 20px 0 20px 0;
	}
`;

export const TitleText = styled.h1`
	margin:20px;
`;

export const ParagraphText = styled.p`
	text-align: justify;
`;
