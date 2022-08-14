import React from 'react';
import './App.css';
import { Outlet, Link} from 'react-router-dom';

export default function () {
	return(
		<div>
			<h1>Bookkeper!</h1>	
			<nav>
				<Link to="/invoices">Invoices</Link> |{" "}
				<Link to="/expences">Expences</Link>
			</nav>
			<Outlet />
		</div>	
	)
}