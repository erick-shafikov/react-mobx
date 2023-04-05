import React, { useEffect, useRef } from 'react'
import propTypes from './props'

import style from './style.module.css'

MinMaxLazy.propTypes = propTypes

function MinMaxLazy({ min = 1 , max, current, onChange }){
  let inp = useRef();

  function onKeyPress(e){
    if(e.key === 'Enter'){
      parseCurrentStr(e)
    }
  }

  function parseCurrentStr(){
    let num = parseInt(inp.current.value);
    applyCurrent(isNaN(num? min : num));
  }

  function applyCurrent(num){
    let validNum = Math.max(min, Math.min(max, num));
    inp.current.value = validNum;
    onChange(validNum);
  }

  let inc = () => applyCurrent(current + 1);
  let dec = () => applyCurrent(current - 1);

  useEffect(()=>{
    inp.current.value = current
  }, [ current ])

    return <div>
      <button className="btn btn-success" onClick={inc} value="+">+</button>
        <input 
          className={style.inp}
          type={"text"} 
          ref={inp} 
          defaultValue ={ current } 
          onBlur={ parseCurrentStr } 
          onKeyDown={onKeyPress}

        />
      <button className="btn btn-warning" onClick={dec} value="-">-</button>
    </div>
    
}

export default MinMaxLazy