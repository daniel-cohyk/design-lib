import React from 'react'
// import "./text.css";

function TextXs({ style, children, bold }) {
	return (
		<p className={`text-xs ${bold ? "text-bold" : ""}`} style={style}>
			{children}
		</p>
	);
}

export default TextXs;
