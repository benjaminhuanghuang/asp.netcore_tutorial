import { Router, RouterConfiguration } from "aurelia-router";

export class Shell {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Modern";
        config.map([
            {
                route: "",     // match localhost:9000
                redirect: "contactmanager"
            },
            {
                route: "contactmanager",    //URL localhost:9000/#/contactmanager
                name: "contactmanager",
                moduleId: "contact-manager/index",  //Component to be loaded
                nav: true,
                title: "Contact Manager"  //Document title to be set 
            },
            {
                route: "taskmanager",
                name: "taskmanager",
                moduleId: "task-manager/index",
                nav: true,
                title: "Task Manager"
            }
        ]);

        this.router = router;
    }
}