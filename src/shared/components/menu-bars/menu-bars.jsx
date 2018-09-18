import React from 'react';
import css from './menu-bars.module.css';

const MenuBars = ({ open, className, onClick }) => {
	const classNames = [css.menuBars, className, open ? css.open : ''].join(' ');
	return <div className={classNames} onClick={e => onClick(e)} />;
};

export default MenuBars;
