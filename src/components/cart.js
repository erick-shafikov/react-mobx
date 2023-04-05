import React from "react";

import { observer } from 'mobx-react-lite'//импорт функционала mobx
import useStore from '../hooks/useStore';

export default observer(function(){
    let [ cartStore ] = useStore('cartStore');

    return <>
        <div><strong>In Cart: {cartStore.items.length}</strong></div>
        <div><strong>Total: {cartStore.total}</strong></div>
    </>
})