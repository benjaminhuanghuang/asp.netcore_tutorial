import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {InMemoryContactService} from "../services/in-memory-contact-service";
import {IContact} from "./icontact";

@inject(Router, InMemoryContactService)
export class ContactList{
    contacts;
    selectedId = 0;
    keyword: string;

    constructor(private router: Router, private contactService: InMemoryContactService) {
    }

    created() {
        this.contactService.getAll().then(contacts => this.contacts = contacts);
    }

    async search() {
        if(this.keyword) {
            await this.contactService.search(this.keyword).then(contacts => this.contacts = contacts);
        } else {
           await this.contactService.getAll().then(contacts => this.contacts = contacts); 
        }
        if(this.contacts && this.contacts.length > 0)
        {
            this.select(this.contacts[0]);
            this.router.navigate(`contacts/${this.selectedId}`);
        }
    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }

    async create() {
        await this.contactService.create().then(
            (createdContact: IContact) => {
                this.contacts.push(createdContact);
                console.log(createdContact);
                this.selectedId = createdContact.id;
                this.router.navigate(`contacts/${this.selectedId}`);
            }
         );
        return true;
    }

    async delete(id) {
        await this.contactService.delete(id).then(
            response => {
                console.log(response);
                this.selectedId = 0;
                this.contactService.getAll().then(contacts => this.contacts = contacts);
                this.router.navigate("");
            }
         );
        return true;
    }
}