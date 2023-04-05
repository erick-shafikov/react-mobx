import React from 'react'

import useStore from '../hooks/useStore';

import { observer } from 'mobx-react-lite'//импорт функционала mobx
import { Link, useParams } from 'react-router-dom';
import E404 from './E404';

export default observer(Product)//декарирование 

function Product(){
	let { id } = useParams();
	let [ productsStore, cartStore ] = useStore('productsStore', 'cartStore');
	let product = productsStore.item(id);

	if(!/^[1-9]+\d*$/.test(id) || product === undefined){//валидация id 01000 и 01000abc
		return <E404 />
	}

	return <>
		<h1>{ product.title}</h1>
		<hr/>
		<div>
			<strong>Price : {product.price }</strong>
		</div>
		<hr/>
		<Link to="/">Back to catalog</Link>
		<hr />
		{ cartStore.inCart(product.id) 
			? <button onClick={()=>cartStore.remove(product.id)} type='button' className="btn btn-danger">Remove from cart</button>
			: <button onClick={()=>cartStore.add(product.id)} type='button' className="btn btn-success">Add to cart</button>
		}
	</>
}