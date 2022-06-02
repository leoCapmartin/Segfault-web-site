let container = document.getElementById("container");
let form = document.getElementById("form");
let command = document.getElementById("command-prompt");

let path = "user@Segfault-Project:/home/user$"
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
    let header = `<div>${path} ${commandName}</div>`;
    if(!checkIn(commandName))
    {
        let err = `Command ${commandName} not found! Try 'help' to see a list of all commands.`
        return `${header}<div>${err}<\div>`;
    }
    let i = findIndex(commandName);
    return `${header}<div>${commands[i].exec()}`;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    container.innerHTML += getCommand(command.value);
    command.value = "";
}, false);