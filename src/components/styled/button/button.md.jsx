import React from "react";
import Button from "./button";

function BtnMdPrim({ loading, children }) {
	return (
		<Button
			className={`primary medium rounded-lg ${loading ? "primary--loading" : ""}`}
		>
			{children}
		</Button>
	);
}

export default BtnMdPrim;
