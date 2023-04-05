import React from "react";
import useWindiwSize from "../hooks/useWindiwSize";

import style from './style.module.css'

export default function(){
    let {width} = useWindiwSize();

    let paddingSize = Math.min(parseInt(width / 200), 5)
    let classNames = `card p-${paddingSize}`

    return <div className={classNames}>
    <h2>Product card</h2>
    <input type="text" className={style.inp}></input>
    </div>
}