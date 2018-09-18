import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './nav-item.module.css';

const NavItem = ({ external, to, newTab, children, brand, onClick, ...props }) => {
	const classNames = [css.link, brand ? css.brand : ''].join(' ');
	if (external)
		return (
			<a
				className={classNames}
				href={to}
				target={newTab ? '_blank' : ''}
				noopener={newTab ? 'true' : 'false'}
				noreferrer={newTab ? 'true' : 'false'}>
				{children}
			</a>
		);
	return (
		<NavLink exact onClick={e => onClick(e)} activeClassName={css.active} className={classNames} to={to}>
			{children}
		</NavLink>
	);
};

export default NavItem;
