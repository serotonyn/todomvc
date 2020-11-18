import { addDisposableListener } from "./helpers";
import { Item } from "./model";

export default class View {
    private input = document.querySelector('input')!;
    constructor() {
    }

    public bindAddItem(handler: (title:string) => void) {
        addDisposableListener(this.input, 'change', ({target}) => {
            const title = target.value.trim();
            if(title){
                handler(title)
            }
        })
    }

}