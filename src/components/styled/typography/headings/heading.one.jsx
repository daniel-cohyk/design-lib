import React from "react";
// import "./heading.css"

function HOne({ style, children }) {
	return <h1 className="text-5xl" style={style}>{children}</h1>;
}

export default HOne;
