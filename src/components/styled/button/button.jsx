import React from "react";
import { Button as MuiButton } from "@mui/material";

function Button({ className, children }) {
	return (
		<MuiButton
			className={className}
			sx={{
                backgroundColor: "inherit",
				textTransform: "initial",
				fontFamily: "inherit",
			}}
		>
			{children}
		</MuiButton>
	);
}

export default Button;
