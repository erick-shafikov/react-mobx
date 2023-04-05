import React, { useEffect } from "react";

import { observer } from 'mobx-react-lite'//импорт функционала mobx
import useStore from '../hooks/useStore';
import { Link } from "react-router-dom";

export default observer(function(){
    let [ cartStore, orderStore ] = useStore('cartStore', 'orderStore');
    let {name, order} = orderStore.send()

    useEffect(()=>{
              
    })

    return <div>
        <h1>{name}, your order is done</h1>
        {order.map(item => 
            <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.price}</div>
                <hr />
            </div>
        )}
        <Link to='/' className='btn btn-warning'>Back to cart</Link>
        <hr/>
        <strong>Total: { cartStore.total }</strong>

    </div>
})