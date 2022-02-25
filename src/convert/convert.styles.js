import styled from 'styled-components';

//vertical direction
//ref : https://www.webcreatorbox.com/tech/writing-mode
export const FontPosition = styled.div`
	height: 300px;
	width: 70%;
        text-align: center;
	position: absolute;
	top: 120px;
	left: calc(15%);
	margin: 0 auto;
	//writing-mode: vertical-lr;

	@media screen and (max-width: 600px) {
		height: 250px;
		top: 120px;
	}
	@media screen and (max-width: 450px) {
		height: 200px;
		top: 100px;
	}
	@media screen and (max-width: 400px) {
		height: 150px;
		top: 70px;
	}

`;

export const TshirtContainer = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	height: 400px;
	font-size: 40px;
	font-family: 'Font Name';
	letter-spacing: -5px;
	workd-wrap: break-word;
	margin: 0 auto;

	@media screen and (max-width: 600px) {
		height: 400px;
		font-size: 40px;
	}
	@media screen and (max-width: 450px) {
		height: 320px;
		font-size: 30px;
	}
	@media screen and (max-width: 400px) {
		height: 250px;
		font-size: 30px;
	}
`;

export const BackgroundImage = styled.div`
	width: 90%;
	height: 100%;
        margin: 0 auto;
	background-position: center;
	background-size: cover;
	background-image: url("https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Ftshirt.png?alt=media&token=912fd175-2686-4bc9-b7d0-4ad096bec23a");
`;

