import React, { useState, useEffect } from 'react';

import LowCase from '../lowcase/lowCase.js';

const GooTranslate = ({ name, fontType }) => {
	const [gooname, setGooname] = useState('');
	const jsonData = {
		'app_id': 'dcf54043fb0990e955af41260a0bf2f3d903186cb106b627c0173e1d39fc3cdc',
		'sentence': `${name}`,
		'output_type': `${fontType}`,
	}

	useEffect(() => {
		console.log("name", name);
		if (name) {
		 const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(jsonData)
		 };
		 fetch('https://labs.goo.ne.jp/api/hiragana', requestOptions)
			.then(response => response.json())
			.then(data => { 
				setGooname(data.converted);
			});
		} else {
			setGooname("Please type your English name.");
		}
	}, [name, fontType]); //useEffect will run when either name or fontType are changed

	return (
		<LowCase
			name={gooname}
		/>
	);
};

export default GooTranslate;
