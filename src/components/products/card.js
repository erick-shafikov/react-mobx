import React from "react";
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'

Card.propTypes = {
    product: PropTypes.object.isRequired,
    inCart: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

function Card({ product, onRemove, onAdd, pending, inCart }){
    let remove = () => onRemove(product.id)
    let add = () => onAdd(product.id)
    
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
                        disabled={pending}
                        >Remove from cart
                    </button> : 
                    <button 
                        onClick={add} 
                        type='button' 
                        className="btn btn-success" 
                        disabled={pending}
                        >Add to cart
                    </button>
                }
            </div>
        </div>
    )
}

export default Card