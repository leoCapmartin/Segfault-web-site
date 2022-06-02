let commands = []

function about(command)
{
    return "WIP!";
}

function welcome(command)
{
    return `<p>Welcome to the Segfault website, you can find here everything you in relation with our project.</p>
    <p class="info">Try type '<span class = "command">help</span>' to see a list of all the available commands.</p>`;
}

function github(command)
{
    return "If the window does not open, click here: <a class=\"info\" href=https://github.com/tofus221/SegfaultProject>https://github.com/tofus221/SegfaultProject</a>"
}

function files(command)
{
    return "WIP!";
}

function help(command)
{
    const maxSpace = 20;
    let msg = "<p>";
    let infoSpan = "<span class=\"info\">";
    let commandSpan = "<span class=\"command\">"
    let closeSpan = "</span>"
    for (const c of commands) 
    {
        msg += commandSpan + c.name + closeSpan;
        
        for (let i = 0; i < maxSpace - c.name.length; i++) {
            msg += "&nbsp;";
        }
        
        msg += infoSpan + c.description + closeSpan;
        msg += "</p>"
    }
    return msg;
}

function clear(command)
{
    document.getElementById("container").innerHTML = ""; 
    return "";
}
class Command
{
    constructor(name, description, func)
    {
        this.name = name;
        this.description = description;
        this.func = func
    }

    exec()
    {
        return this.func(this);
    }
}


commands.push(new Command("about", "Who are we and What is our S4 project?", about));
commands.push(new Command("welcome", "Display the welcoming message.",welcome));
commands.push(new Command("github", "Get Github link to the project.",github));
commands.push(new Command("files", "Check out our differents reports and our project.",files));
commands.push(new Command("help", "If you can read this, you already know what it does", help));
commands.push(new Command("clear", "clear the terminal", clear));

commands.sort((a,b) => a.name.localeCompare(b.name)); 