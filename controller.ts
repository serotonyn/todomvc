import { generateUuid } from "./helpers";
import Model, { Item } from "./model";
import View from "./view";

export default class Controller {
    constructor(public model: Model, public view: View) {

        view.bindAddItem(this.addItem.bind(this))
    }

    setView(raw: string) {
        console.log('hi from controller')
    }

    addItem(title: string) {
        this.model.insert({
            id: generateUuid(),
            completed: false,
            title
        });
    }
}