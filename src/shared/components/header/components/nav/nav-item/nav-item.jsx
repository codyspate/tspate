import React from 'react';
import { Link } from 'react-router-dom';
import css from './nav-item.module.css';

const NavItem = ({ external, to, newTab, children, ...props }) => {
	if (external)
		return (
			<a
				className={css.link}
				href={to}
				target={newTab ? '_blank' : ''}
				noopener={newTab ? 'true' : 'false'}
				noreferrer={newTab ? 'true' : 'false'}>
				{children}
			</a>
		);
	return (
		<Link className={css.link} to={to}>
			{children}
		</Link>
	);
};

export default NavItem;
