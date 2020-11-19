import { generateUuid } from "./helpers";
import Model, { Item } from "./model";
import View from "./view";

export default class Controller {
    constructor(public model: Model, public view: View) { }

    addItem(title: Item["title"]) {
        this.model.insert({
            id: generateUuid(),
            completed: false,
            title
        });
    }
}