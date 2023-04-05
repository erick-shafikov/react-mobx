import { makeAutoObservable, runInAction } from "mobx";//исключаем повторный рендеринг

export default class Products{
    products = []

	item = (id) => {
		return  this.products.find(item => item.id == id);
	}

	async load(){
		let products = await this.api.all()

		runInAction(() => {//исключаем повторный рендеринг
			products.forEach(element => {
				element.active = true
			});
			this.products = products
		})
	}

	constructor(rootStore){
        makeAutoObservable(this);
        this.rootStore = rootStore; //возможность обращаться к другим хранилищам
		this.api = this.rootStore.api.products

	}
}