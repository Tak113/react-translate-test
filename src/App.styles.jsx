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
	width: 150px;
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
	}
`;

export const FormLabelContainer = styled(FormLabel)`
	&& {
		margin-top: 30px;
	}
`;

export const Wrapper = styled.div`
	display:flex;
	flex-direction: row;
	width:100%;

	@media screen and (max-width: 800px) {
  		flex-direction: column;
  		align-items: center;
  		width: 100%;
  	}
`;

export const WrapperContainer = styled.div`
	display:flex;
	flex-direction: column;
	width:100%;
	margin:20px;
`;