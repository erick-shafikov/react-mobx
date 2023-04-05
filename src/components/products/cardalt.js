import React from "react";
import { Link } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react-lite'

import PropTypes from 'prop-types'

Card.propTypes = {
    id: PropTypes.number.isRequired
}

function Card({ id }){
    let [ productsStore, cartStore ] = useStore('productsStore', 'cartStore');

    let product = productsStore.item(id);
    let inCart = cartStore.inCart(id);
    let inProcess = cartStore.inProcess(id);

    let add = () => cartStore.add(id);
    let remove = () => cartStore.remove(id)
    
    return (
        <div className='card'>
            <div className='card-body'>
                <h3>{ product.title }</h3>
                <div>{ product.price}</div>
                <Link to={`/product/${product.id}`}>Read more</Link>
                <hr/>
                { inCart ? 	
                    <button 
                        onClick={remove} 
                        type='button' 
                        className="btn btn-danger"  
                        disabled={inProcess}
                        >Remove from cart
                    </button> : 
                    <button 
                        onClick={add} 
                        type='button' 
                        className="btn btn-success" 
                        disabled={inProcess}
                        >Add to cart
                    </button>
                }
            </div>
        </div>
    )
}

export default observer(Card)