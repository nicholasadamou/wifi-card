import React from "react";

import { Helmet } from "react-helmet";

import GlobalStyles from "../../sass/GlobalStyles";
import '../../sass/light.min.css';

import Fonts from "../../assets/Fonts/Fonts";

const Layout = (content) => (
	<>
		<GlobalStyles />
		<Fonts />
		<Helmet htmlAttributes={{ lang: "en" }} title="WiFi Card">
			<link rel="icon" href="/assets/favicons/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/assets/favicons/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/assets/favicons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/assets/favicons/favicon-16x16.png"
			/>
		</Helmet>
		{content()}
	</>
);

export default Layout;
