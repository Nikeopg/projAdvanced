import { MainView } from "./ views/main.js/main";

class App {
    routes = [{ path: "", view: MainView }];
    constructor() {
        window.addEventListener("hashchange", this.route.bind(this));
        this.route();
    }

    route() {
        const view = this.routes.find((r) => r.path == location.hash).view;
    }
}

new App();
