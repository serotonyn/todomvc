export interface Item {
    id: string,
    completed: boolean,
    title: string
}

export default class Model {
    constructor() {}

    getLocalStorage(): Item[] {
        return JSON.parse(window.localStorage.getItem("data")!) || [];
    }
    setLocalStorage(itemList: Item[]) {
        return window.localStorage.setItem("data", JSON.stringify(itemList));
    }

    insert(item: Item){
        const itemList = this.getLocalStorage();
        itemList.push(item);
        this.setLocalStorage(itemList);
    }
}