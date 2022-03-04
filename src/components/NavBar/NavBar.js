import React, { Component } from 'react';
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import navStyles from './NavBar.module.css';
import 'animate.css';

const name = 'JMRC';

const NavBar = () => {
	return (
		<div className={navStyles.NavBar}>
			<p>{name}</p>
			<MobileNavigation/>
			<Navigation/>
		</div>
	);
};

export default NavBar;
