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
import "./styles/text/text.css";
import "./styles/heading/heading.css";
import "./styles/button/button.css";
import BtnMdPrim from "./components/styled/button/button.md";

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

			<Text bold>Text Base</Text>

			<TextSm>Text Small</TextSm>

			<TextXs>Text Extra Small</TextXs>

            <BtnMdPrim loading>
                Button Medium Green
            </BtnMdPrim>
		</div>
	);
}

export default App;
