import styled from 'styled-components';

//vertical direction
//ref : https://www.webcreatorbox.com/tech/writing-mode
export const FontPosition = styled.div`
	height: 280px;
	position: absolute;
	margin: 120px auto 0 auto;
`;

export const TshirtContainer = styled.div`
	width: 500px;
	position: absolute;
	display: flex;
	align-items: center;
	height: 450px;
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
	background-image: url("https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Ftshirt.png?alt=media&token=7df4710c-97fd-46ea-8db2-3d3fc4920d7c");
`;

