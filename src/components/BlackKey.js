import React from 'react';
import './BlackKey.css';

function BlackKey({ setPitch, value }) {
	return (
		<div className = {`blackKey ${value}`}
		onClick={e => setPitch(value)}
		></div>
	)
}

export default BlackKey