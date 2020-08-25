import React from 'react';
import './WhiteKey.css';

function WhiteKey({ setPitch, value }) {
	return (
		<div className ='whiteKey'
		onClick={e => setPitch(value)}
		></div>
	)
}

export default WhiteKey