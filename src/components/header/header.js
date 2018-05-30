import React from 'react';
import Logo from './ts-logo.png';

const Header = ({ className }) => (
	<div className="header">
		<div>
			<h1>Tim Spate</h1>
			<h2>Full Stack Web Developer</h2>
			<a href="mailto:contact@tspate.com?body=%0D%0D%0D%0D%0DSent%20from%20tspate.com" target="_top">
				contact@tspate.com
			</a>
		</div>
		<img className="logo" alt="Tim Spate Logo" src={Logo} />
	</div>
);

export default Header;
