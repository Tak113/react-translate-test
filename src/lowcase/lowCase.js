import reactStringReplace from 'react-string-replace';
import {LetterSpace} from './lowCase.styles.js';

//ref : https://github.com/iansinnott/react-string-replace
const LowCase = ({ name }) => {

	return (
		<span>
			{reactStringReplace(name, /(ッ|ャ|ュ|ョ|ァ|ィ|ゥ|ェ|ォ)/g, (match, i) => (
				<LetterSpace key={i}>{match}</LetterSpace>
			))}
		</span>
	);
};

export default LowCase;