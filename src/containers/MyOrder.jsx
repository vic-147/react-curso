import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from "@context/AppContext.js"
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import { v4 as uuidv4 } from 'uuid';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	// Agrega una clave única "uuid" a cada objeto "product"
	const cartWithIds = state.cart.map(product => ({ ...product, uuid: uuidv4() }));

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cartWithIds.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cartWithIds.map(product => (
					<OrderItem product={product} key={`productItem-${product.uuid}`} />
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
