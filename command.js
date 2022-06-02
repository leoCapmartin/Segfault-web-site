function sayName(command)
{
    return command.name;
}

class Command
{
    constructor(name, func)
    {
        this.name = name;
        this.func = func
    }

    exec()
    {
        return this.func(this);
    }
}

let commands = []

commands.push(new Command("about", sayName));
commands.push(new Command("welcome", sayName));
commands.push(new Command("github", sayName));
commands.push(new Command("files", sayName));
commands.push(new Command("help", sayName));
commands.push(new Command("clear", sayName));

commands.sort((a,b) => a.name.localeCompare(b.name)); 