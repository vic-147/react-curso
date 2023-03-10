import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import { useGetProducts } from '@hooks/useGetProducts.js';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=20';

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={`productList-${product.id}`} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
