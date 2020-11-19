import Model from './model';
import Controller from './controller';
import View from './view';

class App {
    private model = new Model();
    private view = new View();
    public controller = new Controller(this.model, this.view);

    constructor() {
        this.setListeners()
    }

    setListeners() {
        document.addEventListener(this.view.AddItemEventType, ({ detail }: CustomEvent["detail"]) => {
            this.controller.addItem(detail)
        })

    }
}

window.addEventListener('load', () => new App(), false)