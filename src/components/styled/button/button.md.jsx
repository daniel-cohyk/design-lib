import React from "react";
import Button from "./button";

function BtnMdPrim({ children }) {
	return (
		<Button
			className="medium rounded-lg"
		>
			{children}
		</Button>
	);
}

export default BtnMdPrim;
