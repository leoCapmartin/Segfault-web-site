let commands = []

function getWhitespace(msg, nb)
{
    res = msg
    for (let i = 0; i < nb - msg.length; i++) {
        res += "&nbsp;"   
    }
    return res;
}

function about(command)
{
    return "<p class=\"tab\">The Segfault group is composed of 4 members from Strasbourg and Toulouse. Due to circumstances beyond our control, we all had to cut short our semester \
    abroad and come back to France to participate in the 4th semester of EPITA. It is in this context that the Segfault the Segfault group was born. <br>\
    The goal of our project is to realize an evolution simulator accompanied by a system of edition of the simulation to make it possible to recreate \
    a multitude of scenarios with a single program.<\p>";
}

function welcome(command)
{
    return `<p>Welcome to the Segfault website, you can find here everything you need in relation with our project.</p>
    <p class="info">Try type '<span class = "command">help</span>' to see a list of all the available commands.</p>`;
}

function github(command)
{
    let github = "https://github.com/tofus221/SegfaultProject";
    setTimeout(() => window.open(github), 1);
    
    return `If the window does not open, click here: <a class="info" href=${github} target="_blank">${github}</a>`;
}

function files(command)
{
    const maxSpace = 20;
    let msg = "";
    let p ="<p>";
    let endP = "</p>"
    let classInfo = "class=\"info\"";
    let closeSpan = "</span>"
    msg += p + getWhitespace("Specification:", maxSpace) + `<a ${classInfo} href=\"Cahier des charges.pdf\" target=\"_blank\">specifications.pdf</a>${endP}`;
    msg += p + getWhitespace("First Report:", maxSpace) + `<a ${classInfo} href=\"Rapport1.pdf\" target=\"_blank\">Report1.pdf</a>${endP}`;
    msg += p + getWhitespace("Second Report:", maxSpace) + `<span ${classInfo}>WIP${closeSpan}${endP}`;
    msg += p + getWhitespace("Final Report:", maxSpace) + `<span ${classInfo}>WIP${closeSpan}${endP}`;
    msg += p + getWhitespace("Project executable:", maxSpace) + `<a ${classInfo} href=\"simulation\" target=\"_blank\" download>Project</a>${endP}`;
    return msg;
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
        if(c.visible)
        {
            msg += commandSpan + c.name + closeSpan;
            
            for (let i = 0; i < maxSpace - c.name.length; i++) {
                msg += "&nbsp;";
            }
            
            msg += infoSpan + c.description + closeSpan;
            msg += "</p>"
        }
    }
    return msg;
}

function cobra(Command)
{
    let link = "https://youtu.be/U1CGEVqj5iY";
    setTimeout(() => window.open(link), 1);
    
    return `<p>Ma parole, tu est fou, ou c'est ta coupe afro qui te fait surchauffer le cerveau ?</p>`;
}

function clear(command)
{
    document.getElementById("container").innerHTML = ""; 
    return "";
}
class Command
{
    constructor(name, description, func, visible)
    {
        this.name = name;
        this.description = description;
        this.func = func
        this.visible = visible
    }

    exec()
    {
        return this.func(this);
    }
}


commands.push(new Command("about", "Who are we and What is our S4 project?", about, true));
commands.push(new Command("welcome", "Display the welcoming message.",welcome, true));
commands.push(new Command("github", "Get Github link to the project.",github, true));
commands.push(new Command("files", "Check out our differents reports and our project.",files, true));
commands.push(new Command("help", "If you can read this, you already know what it does", help, true));
commands.push(new Command("clear", "clear the terminal", clear, true));
commands.push(new Command("cobra", "", cobra, false))

commands.sort((a,b) => a.name.localeCompare(b.name)); 