import React from 'react';

import QRCode from 'qrcode.react';

import styled from 'styled-components';

const Container = styled.div`
	fieldset {
		margin-top: 2em;
		padding: 1em;
	}
`;

const Details = styled.div`
	display: flex;
	padding: 1em;

	div {
		display: grid;
		align-items: center;

		margin: 0;
		margin-left: 10px;

		width: 100%;

		input {
			margin-top: 5px;

			width: 100%;

			font-size: 1.4em;
			font-weight: bold;
			line-height: 2;

			background-color: var(--white);
			border: solid 1px var(--light-grey);
		}
	}
`;

const PrintButton = styled.div`
	padding-top: 2em;

	button {
		width: 180px;
		height: 50px;

		color: var(--white);

		background-color: var(--blue);
	}
`;

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ssid: '',
			password: '',
			QR: ''
		}
	}

	handleSSIDChange = (e) => {
		this.setState({
			ssid: e.target.value
		}, () => {
			this.generateQRCode();
			console.log(`SSID: ${this.state.ssid}`)
		})
	}

	handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value
		}, () => {
			this.generateQRCode();
			console.log(`Password: ${this.state.password}`)
		})
	}

	generateQRCode = () => {
		this.setState({
			QR: `WIFI:T:WPA;S:${this.state.ssid};P:${this.state.password};;`
		}, () => {
			console.log(`QR Code: ${this.state.QR}`)
		})
	}

	render() {
		return (
			<Container>
				<fieldset id="print-area">
					<legend></legend>

					<h1>WiFi Login</h1>
					<hr/>

					<Details>
						<QRCode value={this.state.QR} size={190} />

						<div>
							<label>Network name:</label>
							<input id="ssid" type="text" maxlength="32" placeholder="Enter your WiFi Network Name" value={this.state.ssid} onChange={this.handleSSIDChange}/>
							<label>Password:</label>
							<input id="password" type="text" maxlength="64" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
						</div>
					</Details>

					<p>
						<span role="img" aria-label="mobile-phone">📸📱</span>Point your phone's camera at the QR Code to connect automatically.
					</p>

				</fieldset>

				<PrintButton>
					<button onClick={window.print}>Print</button>
				</PrintButton>
			</Container>
		)
	}
}

export default Card;
