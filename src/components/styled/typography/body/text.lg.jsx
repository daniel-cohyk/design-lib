import React from "react";
// import "./text.css";

function TextLg({ style, children, bold }) {
	return (
		<p className={`text-lg ${bold ? "text-bold" : ""}`} style={style}>
			{children}
		</p>
	);
}

export default TextLg;
