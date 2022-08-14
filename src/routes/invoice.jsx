import React from 'react';
import { useParams} from 'react-router-dom';
import './invoice.css';
import { getInvoice} from '../data';
export default function Invoice(){
	let params = useParams();
	let invoice = getInvoice(parseInt(params.invoiceId, 10));
	return (
		<main style={{  }}>
			<h2>Total Due: {invoice.amount}</h2>
			<p>
				{invoice.name}: {invoice.number}
			</p>
			<p>Due Date: {invoice.due}</p>
		</main>
	);
}