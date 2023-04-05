import React from "react";
import MinMax from '../MinMax/index'

function CartRow( {num, id, title, price, rest, cnt, onChange, onRemove} ){
     
    let change = cnt => onChange(id, cnt);
    let remove = () => onRemove(id);
    let setMax = () => onChange(id, rest)

    return <tr key={num}>
    <td>{ num }</td>
    <td>{ title }</td>
    <td>{ price }</td>
    <td>
        <MinMax min={1} max={rest} current={cnt} onChange={change} />
    </td>
    <td>{ price * cnt }</td>
    <td>
        <button type="button" onClick={remove}>X</button>
        <button type="button" onClick={setMax}>MAX</button>
    </td>
</tr>
}

export default React.memo(CartRow)