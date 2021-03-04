import { createGlobalStyle } from 'styled-components';

import KouzanGyousho from './KouzanGyoushoOTF.woff';

export default createGlobalStyle`
	@font-face {
		font-family: 'Font Name';
		src: local('Font Name'), local('FontName'),
		url(${KouzanGyousho}) format('woff');
		font-weight: 300;
		font-style: normal;
	}
`;