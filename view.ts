export default class View {
    public AddItemEventType = "AddItem";
    private addItemEvent = (title: string) => new CustomEvent(this.AddItemEventType, { detail: title });

    private input = document.querySelector('input')!;

    constructor() {
        this.addListeners();
    }

    addListeners() {
        this.input.addEventListener('change', ({ target }: any): void => {
            const title = target.value.trim();
            if (title) {
                document.dispatchEvent(this.addItemEvent(title));
            }
        })
    }
}