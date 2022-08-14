import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
	BrowserRouter,
	Routes,
	Route } from 'react-router-dom';
import Expences from './routes/expences';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';  


const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expences" element={<Expences />} />
					<Route path="invoices" element={<Invoices />}>
						<Route path=":invoiceId" element={<Invoice />} />
					</Route>
					<Route path="*" element={<main><p>There's nothing here!'</p></main>}	/>
				</Route>
			</Routes>
		</BrowserRouter>
);