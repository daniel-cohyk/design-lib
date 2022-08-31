import React from "react";
// import "./text.css";

function TextSm({ style, children, bold }) {
	return (
		<p className={`text-sm ${bold ? "text-bold" : ""}`} style={style}>
			{children}
		</p>
	);
}

export default TextSm;
