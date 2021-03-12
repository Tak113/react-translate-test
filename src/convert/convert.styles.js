import styled from 'styled-components';

//vertical direction
//ref : https://www.webcreatorbox.com/tech/writing-mode
export const FontPosition = styled.div`
	height: 300px;
	position: absolute;
	margin: 120px auto 0 auto;
`;

export const TshirtContainer = styled.div`
	width: 500px;
	position: relative;
	display: flex;
	align-items: center;
	height: 500px;
	font-size: 50px;
	font-family: 'Font Name';
	-ms-writing-mode: tb-rl;
	writing-mode: vertical-rl;
	letter-spacing: -5px;
	workd-wrap: break-word;
	margin: 0 auto 0 auto;
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-image: url("https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Ftshirt.png?alt=media&token=912fd175-2686-4bc9-b7d0-4ad096bec23a");
`;

