import React from 'react'

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite'//импорт функционала mobx

// import ProductCard from '../components/products/card'
import ProductCard from '../components/products/cardalt'


export default observer(Home)//декорирование 

function Home(){
	let [ productsStore, cartStore ]= useStore('productsStore', 'cartStore');

	let { products } = productsStore
	let { inCart, remove, add, inProcess} = cartStore

	return <div className='container'>
		<h1>Catalog</h1>
			<hr/>
			<div className='row'>
				{ products.map((pr) => (
					<div className='col col-4 mb-3 mt-3' key={pr.id}>
						{/* <ProductCard 
							product={pr}
							inCart={inCart(pr.id)}
							pending={inProcess(pr.id)}
							onAdd ={add}
							onRemove={remove}
						/> */}
						<ProductCard id={pr.id}/>
					</div>
					))}
				<hr/>
			</div>
	</div>;
}