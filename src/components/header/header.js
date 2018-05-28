import React from 'react';
import Logo from './ts-logo.png';

const Header = ({ className }) => (
	<div className="header">
		<div>
			<h1>Tim Spate</h1>
			<h2>Full Stack Web Developer</h2>
			<span>
				<a href="mailto:contact@tspate.com">contact@tspate.com</a>
			</span>
		</div>
		<img className="logo" alt="Tim Spate Logo" src={Logo} />
	</div>
);

export default Header;
