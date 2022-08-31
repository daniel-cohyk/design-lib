import React from "react";
import { Button } from "@mui/material";

function BtnMdGreen({ children }) {
	return (
		<Button
			sx={{
				textTransform: "initial",
				fontFamily: "inherit",
			}}
			className="medium rounded-lg"
		>
			{children}
		</Button>
	);
}

export default BtnMdGreen;
