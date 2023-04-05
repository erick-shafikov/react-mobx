import React from 'react'

import useStore from '../hooks/useStore';
import CartRow from '../components/products/cart-row';

import { observer } from 'mobx-react-lite'//импорт функционала mobx
import { Link } from 'react-router-dom';

export default observer(Cart)//декарирование 

function Cart(){
	let [ cartStore ] = useStore('cartStore');
	
	let { itemsDetailed : product, total, remove, change, itemCnt} = cartStore;


	return <div>
		<h1>Cart</h1>
		<hr/>
		{product.length?
		<>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
					<th>Action</th>
				</tr>
				{product.map((pr, i) => (
					<CartRow 
					key={pr.id} 
					{...pr}
					num={i + 1}
					onChange={change}
					onRemove={remove}
					/>
				))}
			</tbody>
		</table>
		<hr/>
		<strong>Total: { total }</strong>
		<Link className="btn btn-primary" to='/order'>Move to order</Link>
		</>
		: <>Cart is empty</>}
		<hr/>
	</div>;
}