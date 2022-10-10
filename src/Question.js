import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
	const [status, setStatus] = useState(false);
	const mountedStyle = { animation: 'inAnimation 250ms ease-in' };
	const unmountedStyle = {
		animation: 'outAnimation 270ms ease-out',
		animationFillMode: 'forwards',
	};

	return (
		<article className='question'>
			<header>
				<h4>{title}</h4>
				<button className='btn' onClick={() => setStatus(!status)}>
					{status ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{status && (
				<p
					className='transition'
					style={status ? mountedStyle : unmountedStyle}
				>
					{info}
				</p>
			)}
		</article>
	);
};

export default Question;
