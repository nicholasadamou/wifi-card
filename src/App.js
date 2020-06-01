import React from "react";

import Layout from "./components/Layout/Layout";
import Card from "./components/Card/Card";

const App = () => Layout(() =>
	<>
		<h1>
			<span role="img" aria-label="antenna-bars">📶</span>&nbsp; WiFi Card
		</h1>

		<p>
			Print a simple card with your WiFi login details. Tape it to the fridge, keep it in your wallet, etc.
		</p>

		<p>
			Your WiFi information is never sent to the server.
			No tracking, analytics, or fingerprinting are used on this website.
			View the <a href="https://github.com/nicholasadamou/wifi-card">source code</a>.
		</p>

		<Card />
	</>
);

export default App;
