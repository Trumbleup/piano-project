import React from 'react';
import './PitchScreen.css';

function PitchScreen({ pitch }) {
	return (
		<div id='screen'>
			<h1>{pitch}</h1>
		</div>
	)
}

export default PitchScreen