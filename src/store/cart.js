import { makeAutoObservable, runInAction } from "mobx";

const BASEURL = `http://faceprog.ru/reactcourseapi/cart/`


export default class Cart{
    items = []
    #token = null;
    IdInProcess = [];

    get itemsDetailed(){
        return this.items.map(item => {
            let details = this.rootStore.productsStore.item(item.id)
            return {...details, ...item}
        })
    }
    get total(){
		return this.itemsDetailed.reduce((sum, pr) => sum + pr.price * pr.cnt, 0)
    }

	inCart = (id) => { //проверка сколько айтемов товара в кразине
		return this.items.some(item => item.id == id)
	}

    inProcess = (id) => { //проверка сколько айтемов товара в кразине
		return this.IdInProcess.some(item => item == id)
	}


    itemCnt = (id) =>{
           let product = this.items.find(item => item.id == id)
           return !!product ? product.cnt : 0
    }

    change = async (id, cnt) => {

        let item = this.items.find(pr => pr.id == id);    

        if(item !== undefined){
            let details = this.itemsDetailed.find(item => item.id == id);
            item.cnt = Math.max(1, Math.min(details.rest, cnt))
            let res = await this.api.change(this.#token, id, cnt)

            if(res){
                runInAction(()=>{
                    item.cnt=cnt
                })
            }
        }

        
    }

    add = async (id) => {
        if(!this.inCart(id) && !this.inProcess(id)){
            this.IdInProcess.push(id)
            let res = await this.api.add(this.#token, id)

            runInAction(()=>{
                if(res) {
                    this.items.push({id, cnt: 1})
                }
                
                this.IdInProcess = this.IdInProcess.filter(el => el != id)
            })
        }
    }

    remove = async (id) => {
        if(this.inCart(id) && !this.inProcess(id)){
            this.IdInProcess.push(id)
            let res = await this.api.remove(this.#token, id)

            runInAction(()=>{
                if(res){
                    this.items = this.items.filter(pr => pr.id !== id)        
                }
                this.IdInProcess = this.IdInProcess.filter(el => el != id)
            })

            
        }
	}

    load = async() => {
        let currentToken = this.rootStore.storage.getItem('CART_TOKEN')
		let {cart, token, needUpdate} = await this.api.load(currentToken)

        if(needUpdate){
            this.rootStore.storage.setItem('CART_TOKEN', token)
        }

        runInAction(() => {//исключаем повторный рендеринг
			this.items = cart;
            this.#token = token
		})      
	}

    reload = () => {
        this.rootStore.storage.setItem('LAST_ORDER', JSON.stringify(this.itemsDetailed))
        this.rootStore.storage.setItem('LAST_ORDER_NAME', JSON.stringify(this.rootStore.orderStore.form.find(item => item.name == 'name').value))
        this.rootStore.storage.removeItem('CART_TOKEN');
        this.items = [];
        this.load();
    }

	constructor(rootStore){
        makeAutoObservable(this);
        this.rootStore = rootStore; //возможность обращаться к другим хранилищам
        this.api = this.rootStore.api.cart
    }
}

/*
get inCart(){
	return id => this.items.some(item => item.id == id)
}
*/