import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from "@context/AppContext.js"
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	//no consegui hacr funcionar con este
	 const sumTotal = () => {
	 	const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
	 	return sum;
	 }

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
				<OrderItem product={product} key={`productItem-${product.id}`} />
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
// funcion de sumar de la etiqueta p
// {state.cart.map(product => parseFloat(product.price)).reduce((a,b) => a + b)}