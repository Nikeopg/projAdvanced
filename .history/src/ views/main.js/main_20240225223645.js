import { AbstractView } from "../../common/view.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor() {
        super();
        this.setTitle("Поиск книг");
    }

    render() {
        const main = document.createElement("div");
        main.innerHTML = "Тест";
        this.app.innerHTML = "";
        this.app.append(main);
    }
}
