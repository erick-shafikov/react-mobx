import React from "react"
import CartStat from './components/cart'

import {NavLink } from "react-router-dom";
import RouterView from "./routes";

import useStore from "./hooks/useStore";

export default function(){

    return <>
    <header>
        <div className="container mt-1">
            <div className="row justify-content-between">
                <div className="col"> 
                    Logo 
                </div>
                <div className="col">
                    <CartStat />
                </div>
            </div>
        </div>
    </header>
    <div>
    <div className="container">
        <div className="row">
         <aside className="col col-3">
         <ul className="list-group">
         <li className="list-group-item">
            <NavLink  
                style={({ isActive }) =>
                isActive ? {color: "red"} : undefined
                } 
                to='/'>Home</NavLink></li>
         <li className="list-group-item">
            <NavLink 
                style={({ isActive }) =>
                    isActive ? {color: "red"} : undefined
                }to='/cart'>Cart</NavLink></li>
         <li className="list-group-item">
            <NavLink style={({ isActive }) =>
                isActive ? {color: "red"} : undefined
                }to='/order'>Order</NavLink></li>

         </ul>
         </aside>
         <main className="col col-9">
            <RouterView />
         </main>
        </div>
    </div>
    </div>
        <div className="container mt-1">
            
            <hr/>
            <footer className="mt-1">
            <div className="container">2023</div>
            </footer>
        </div>
    </>
       
}