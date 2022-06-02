let container = document.getElementById("container");
let form = document.getElementById("form");
let command = document.getElementById("command-prompt");

let path = "<span class=\"user\">user</span>@<span class=\"domain\">Segfault-Project</span>:<span class=\"path\">/home/user</span>$"

function focusOnCommand()
{
    command.focus();
    const end = command.textContent.length;
    command.setSelectionRange(end, end);
}
function checkIn(commandName)
{
    for (let c of commands) 
    {
        if (c.name === commandName) 
        {
            return true;
        }
    }
    return false;
}

function findIndex(commandName)
{
    let i = 0;
    for (let c of commands) 
    {
        if (c.name === commandName) 
        {
            return i;
        }
        i++;
    }
}


function getCommand(commandName)
{
    if(commandName == "clear")
    {
        let i = findIndex(commandName);
        commands[i].exec();
        return "";
    }
    let header = `<div class="command-header">${path} <span class="command">${commandName}</span></div>`;
    if(!checkIn(commandName))
    {
        let err = `Command ${commandName} not found! Try type '<span class = "command">help</span>' to see a list of all the available commands.`
        return `${header}<div class = "info">${err}</div>`;
    }
    let i = findIndex(commandName);
    return `${header}<div>${commands[i].exec()}</div>`;
}

window.addEventListener("click", () => {
    focusOnCommand();
});

command.addEventListener("keyup", e => {
    e.preventDefault();
    if(e.key === "Enter")
    {
        let tmp = getCommand(command.textContent);
        container.innerHTML += tmp;
        command.textContent = "";
        window.scrollTo(0, document.body.scrollHeight);
    }
}, false);

focusOnCommand();
let i = findIndex("welcome");
container.innerHTML += `<div>${commands[i].exec()}`
