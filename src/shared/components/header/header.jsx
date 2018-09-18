import React from 'react';
import Logo from '../../static/img/ts-logo.png';
import css from './header.module.css';

const Header = ({ className }) => (
	<div className={css.headerWrapper}>
		<div className="contentContainer">
			<div className={css.header}>
				<div>
					<h1>Tim Spate</h1>
					<h2>Software Engineer</h2>
					<a className={css.link} href="mailto:contact@tspate.com?body=%0D%0D%0D%0D%0DSent%20from%20tspate.com" target="_top">
						contact@tspate.com
					</a>
				</div>
				<img className={css.logo} alt="Tim Spate Logo" src={Logo} />
			</div>
		</div>
	</div>
);

export default Header;
