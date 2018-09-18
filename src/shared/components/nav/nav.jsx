import React from 'react';
import NavItem from './nav-item/nav-item.jsx';
import { Link } from 'react-router-dom';
import css from './nav.module.css';
import MenuBars from '../menu-bars/menu-bars.jsx';

class Nav extends React.Component {
	data = [
		{
			to: '/',
			text: 'Home'
		},
		{
			to: '/projects',
			text: 'Projects'
		}
	];

	state = {
		menuOpen: false
	};
	toggleMenu = () => {
		this.setState({ menuOpen: !this.state.menuOpen });
	};
	render() {
		const props = this.props;
		if (!this.data || this.data.length < 2) return null;
		let items = [];
		this.data.forEach(({ text, ...props }, i) => {
			items.push(
				<NavItem key={text} onClick={this.toggleMenu} {...props}>
					{text}
				</NavItem>
			);
		});
		return (
			<nav className={css.nav}>
				<div className={`contentContainer`}>
					<div className={css.flex}>
						<div className={css.mobile}>
							<NavItem key="navBar-brand-ts" to="/" brand>
								Tim Spate
							</NavItem>
							<MenuBars open={this.state.menuOpen} onClick={this.toggleMenu} className={css.menuBars} />
						</div>
						<div className={`${css.navItems} ${this.state.menuOpen ? css.open : ''}`}>{items}</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
