import React, { useState } from 'react';
import './Piano.css';
import WhiteKey from '../components/WhiteKey';
import BlackKey from '../components/BlackKey';
import PitchScreen from '../components/PitchScreen';

function Piano() {
	const [pitch, setPitch] = useState("C")

	return (
		<div id='piano' className=''>
			<PitchScreen pitch={pitch}/>
			<div className='keyRow'>
				<WhiteKey setPitch={setPitch} value={"C"}/>
				<WhiteKey setPitch={setPitch} value={"D"}/>
				<WhiteKey setPitch={setPitch} value={"E"}/>
				<WhiteKey setPitch={setPitch} value={"F"}/>
				<WhiteKey setPitch={setPitch} value={"G"}/>
				<WhiteKey setPitch={setPitch} value={"A"}/>
				<WhiteKey setPitch={setPitch} value={"B"}/>
				<WhiteKey setPitch={setPitch} value={"C"}/>
				<div className='blackKeyGroup'>
					<BlackKey setPitch={setPitch} value={"Db"}/>
					<BlackKey setPitch={setPitch} value={"Eb"}/>
					<BlackKey setPitch={setPitch} value={"Gb"}/>
					<BlackKey setPitch={setPitch} value={"Ab"}/>
					<BlackKey setPitch={setPitch} value={"Bb"}/>
				</div>
			</div>
			
		</div>
	)
}

export default Piano