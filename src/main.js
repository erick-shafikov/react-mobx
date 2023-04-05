// import './test/store-cart'

import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import storeContext from "./context/store";
import RootStore from './store'

let store = new RootStore();
store.cartStore.load();


store.productsStore.load().then(() => {
	React.createElement('div',{}, ['Hello'])

	ReactDOM.render(
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<storeContext.Provider value={store}>
				<App />
			</storeContext.Provider>
		</BrowserRouter>,
		document.querySelector('.app')
	);
})