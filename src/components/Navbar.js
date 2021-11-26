import React from 'react';
import logo from './logo.png';
import "./Navbar.css";

export default function Navbar() {
	return (
			<header>	
				<nav class="Navbar">
					<div class="brand">
						<a href="#"><img src={logo} className= 'mainlogo' alt='mainLogo'></img></a>
					</div>
					<div>
						<a href="/#/logIn"> Logearse </a>
					</div>
					<div>
						<a href="/#/cart"> Carro de Compras </a>
					</div>	
				</nav>
			</header>

		)
};