import { Router, RouterConfiguration } from "aurelia-router";

export class Index {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Aurelia Contact Manager";
        config.map([
            {
                route: "",
                moduleId: "contact-manaer/no-selection",
                nav: true,
                name: "contactmanager",
                title: "Contact Manager"
            },
            {
                route: "contacts/:id",
                moduleId: "contact-manager/contact-detail",
                nave: true,
                name: "contacts"
            }
        ]);
        this.router = router;
    }
}
