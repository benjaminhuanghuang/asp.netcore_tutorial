class Greeter{
    constructor(private message:string)
    {
    }

    sayHello()
    {
        console.log(`hello ${this.message}`);
    }

    get greetingMessage(): string{
        return `hello ${this.message}`;
    }
}