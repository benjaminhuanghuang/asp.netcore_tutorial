import { Router, RouterConfiguration } from "aurelia-router";

export class Index {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Aurelia Tasks Manager";
        config.map([
            {
                route: "",
                moduleId: "task-manager/no-selection",
                nav: true,
                name: "taskmanager",
                title: "Task Manager"
            },
            {
                route: "contacts/:id",
                moduleId: "task-manager/contact-detail",
                nave: true,
                name: "tasks"
            }
        ]);
        this.router = router;
    }
}
