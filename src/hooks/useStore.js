import { useContext } from "react";
import storeContext from '../context/store'

export default function(...list){
    let stores = useContext(storeContext);

    return list.map(name => stores[name]);

}