import HOne from "./components/styled/typography/headings/heading.one";
import HTwo from "./components/styled/typography/headings/heading.two";
import HThree from "./components/styled/typography/headings/heading.three";
import HFour from "./components/styled/typography/headings/heading.four";
import HFive from "./components/styled/typography/headings/heading.five";
import TextLg from "./components/styled/typography/body/text.lg";
import Text from "./components/styled/typography/body/text";
import TextSm from "./components/styled/typography/body/text.sm";
import TextXs from "./components/styled/typography/body/text.xs";

import "./styles/common.css";
import "./styles/text.css";
import "./styles/heading.css";
import "./styles/button.css";
import BtnMdGreen from "./components/styled/button/button.md";

function App() {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<HOne>Headline One</HOne>

			<HTwo>Headline Two</HTwo>

			<HThree>Headline Three</HThree>

			<HFour>Headline Four</HFour>

			<HFive>Headline Five</HFive>

			<TextLg>Text Large</TextLg>

			<Text>Text Base</Text>

			<TextSm>Text Small</TextSm>

			<TextXs>Text Extra Small</TextXs>

            <BtnMdGreen>
                Button Medium Green
            </BtnMdGreen>
		</div>
	);
}

export default App;
