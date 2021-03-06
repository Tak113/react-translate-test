import reactStringReplace from 'react-string-replace';
import {LetterSpace,
		TextBox,
		LabelIcon} from './lowCase.styles.js';

//ref : https://github.com/iansinnott/react-string-replace
const LowCase = ({ name }) => {

	return (
		<TextBox>
			{reactStringReplace(name, /(ッ|ャ|ュ|ョ|ァ|ィ|ゥ|ェ|ォ)/g, (match, i) => (
				<LetterSpace key={i}>{match}</LetterSpace>
			))}
			<LabelIcon
				src='https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Flabel.png?alt=media&token=391a1dab-bff4-482e-95b4-acdcb64cdd6c'
				alt='label'
			/>
		</TextBox>
	);
};

export default LowCase;