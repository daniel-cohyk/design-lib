import React from "react";
// import "./text.css";

function Text({ style, children, bold }) {
	return (
		<p className={`text-base ${bold ? "text-bold" : ""}`} style={style}>
			{children}
		</p>
	);
}

export default Text;
