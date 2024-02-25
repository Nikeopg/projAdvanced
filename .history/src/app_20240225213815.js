class App {
    routes = [{ path: "", view: null }];
    constructor() {
        window.addEventListener("hashchange", this.route());
        this.route();
    }

    route() {}
}

new App();
