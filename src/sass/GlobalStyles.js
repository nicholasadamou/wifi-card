import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
	  --white: #fafafa;
	  --black: #212121;
	  --red: #fc4349;
	  --grey: #f5f5f5;
	  --light-grey: #ddd;
	  --green: #10b500;
	  --yellow: #fff498;
	  --blue: #0074d9;
	}

	* {
	  margin: 0;
	  padding: 0;
	}

	html {
	  overflow: auto;
	  height: auto;

	  background: none;
	}

	body {
	  font-family: "Roboto Slab" sans-serif;
	  color: var(--black);

	  background: var(--white);

	  max-width: 700px;
	}

	p {
		line-height: 1.6;
	}

	fieldset {
		border-style: dashed;
		border-color: var(--light-grey);
	}

	@media print {
		body * {
			visibility: hidden;
		}

		#print-area, #print-area * {
			visibility: visible;
		}

		#print-area input {
			border: none;
		}

		#print-area {
			position: absolute;
			left: 0;
			top: 0;

			width: 700px;
		}
	}
`;

export default GlobalStyles;
