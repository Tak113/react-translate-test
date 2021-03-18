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

export const Wrapper = styled.div`
	padding: 5px 20px;
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
		width: 50%;
		height: 45px;
		margin-top:20px;
	}
`;

export const TextFieldName =styled(TextField)`
	&& {
		width: 50%;
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
		margin-top:30px;
	}
`;