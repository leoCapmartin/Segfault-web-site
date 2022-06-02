let commands = []
let asciis =
[
    ,
]

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
function dattebayo(command)
{
    let naruto = "<pre>    ___________§___§§§____§___§__§§_____§_________________<br>\
    ____________§_____§§§_§____§_§§______§______§§_________<br>\
    _____________§_______§§_____§________§__§§§§_§_________<br>\
    _____________§_______________________§§§_____§_________<br>\
    _____________§______________________________§__________<br>\
    ___§§§§§§_____§_____________________________§__________<br>\
    ____§______§§§_____________________________§___________<br>\
    ____§§_____________________________________§§§_________<br>\
    _____§________________________________________§§§§_____<br>\
    ______§_________________________________________§§_____<br>\
    _______§_______________________________________§_______<br>\
    _______§§____________________§_______________§§________<br>\
    _______§_____________§§§§§§§§§_______________§_________<br>\
    ______§_____________§§§§§§§§§§§_______§_______§§_______<br>\
    ____§§____________§§§§§§§§§§§§§§________________§§_____<br>\
    ___§_____________§§§§§§____§§§§§§___§___§_________§§___<br>\
    __§_____________§§§§§______§§§§§§____§__§§__________§__<br>\
    §§_____________§§§§__§______§§§§§§§__§§__§________§§___<br>\
    §_____________§§§§__§§______§§§§§§§__§§§_§§___§§§§_____<br>\
    ______________§§§__§_§§_____§§§§§§§§__§§§_§§__§________<br>\
    _____________§§§___§§§_____§§§§§§§§§§_§§§§§§§__§_______<br>\
    _____________§§____§§§____§§§§§§§§§_§§§§§§§§§___§______<br>\
    §§§__________§_____§§§§_§§§§§§________§__§§§§§___§_____<br>\
    ___§§_______§§§____§§_§§§§§§§_____________§§§§§__§§____<br>\
    ____§_______§§§§___§_§§§§§__§________§____§§§§§§§§§§§§§<br>\
    ___§___§____§§§§§__§§§§§§__§______§§§________§__§§§§§§§<br>\
    ___§___§____§§§§§§§§§§§___§_____§§_________§_§§_§§§§§§§<br>\
    __§____§____§§§§§§§§§§_________§§______§§§§§_§§__§§§§§§<br>\
    _§_____§____§§§§§§§§§__________§______§_____§§§__§__§§§<br>\
    _§____§§____§§§§§§§§§_______________________§§§__§_____<br>\
    §______§____§§§§§§§§§§§§§____________________§§§_§_____<br>\
    ___§§§§_____§§§§§§_______§______________§§_§§§_§§______<br>\
    ______§__§__§§§§§§_§§§§§_____________________§§_§§_____<br>\
    ______§_§§__§§§§§_§§_§§_§_____________________§§_§§____<br>\
    ______§_§_§_§§§§§_§_§§§§§_________________§§§____§§____<br>\
    ______§_§_§_§§§§§_§_§§§§_____________________§____§____<br>\
    ______§§§_§§§§§§§_§§§§§§_______§_____§§§________§__§___<br>\
    ______§§§__§_§§§§__§§§§______§_____§§_________§§§_§§§__<br>\
    ______§_§___§_§_§___________§_____§___§§§_____§§__§§§§§<br>\
    ________§__§§____§______________§§__§§__§_____§§§_§§§§§<br>\
    __________§____§_§§____________§§__§___§______§_§§_§§§§<br>\
    _________§§_____§_§_§_________§§_§§__§§_______§__§§§_§§<br>\
    _________§_______§_§__________§_§___§________§§__§§§___<br>\
    _________________§§§_________§_§__§§_________§§__§§§§__<br>\
    _________________§_§§_§_____§_§_§§___________§§_§§§§§__<br>\
    __________________§§§§§_____§§§§_____§______§§§§§§§§§__<br>\
    ___________________§§§____________§§§______§§§§§§§§§§§_<br>\
    ____________________§§§__§________________§§§§§§§§§§§§§<br>\
    _____________________§§§_§_______________§§§§§§§§§§§§§§<br>\
    ______________________§_§§______________§§§§§§§§§§§§§§§<br>\
    ________________________§§§____________§§§§§§§§§§§§§§§§<br>\
    __________________________§§§§________§§§§§§§§§§§§§§§§§<br>\
    _____________________________§§§§__§§§§§§§§§§§§§§§§§§§§</pre>";
    return naruto;
}

function onePiece()
{
    let luffy =  "<pre>    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠤⠒⠒⠒⠒⠒⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⢀⡲⢋⠝⠋⣛⣳⡄⠀⠀⠀⠀⠀⠀⠉⠓⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⢀⠠⣴⠗⢀⠥⠂⢁⠤⠤⠤⠁⠀⠀⠀⠀⠀⠀⠀⠀⣛⠛⠉⠗⠒⠲⢤⣀⠀<br>\
    ⠰⠃⠐⠀⠋⡠⠀⠮⠤⠤⠤⠤⡤⡄⠀⠀⠀⠀⠀⠀⢠⣽⠄⠀⠀⠀⠀⠀⢸⡆<br>\
    ⠀⠜⠀⠀⠈⠀⢠⣤⣔⣒⡒⠒⠂⠁⠀⡀⢀⣀⣤⣶⣿⡟⠀⠀⠀⠀⠀⢀⡼⠀<br>\
    ⠈⠀⠀⠀⠀⣰⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠉⠁⠀⠀⠀⢄⡴⠋⠀⠀<br>\
    ⠀⠀⠀⠀⣰⠋⠀⠀⠀⠈⠙⠛⠛⠛⠛⠋⠉⠀⠀⠀⠀⢀⣠⣴⡊⠁⠀⠀⠀⠀<br>\
    ⠀⡠⠐⠉⢸⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⣤⣶⣿⣿⣿⡻⡄⠀⠀⠀⠀<br>\
    ⠀⠁⠀⠀⣿⢹⣿⣿⣿⣶⣦⣶⣶⣶⣶⣶⣙⠋⠴⠛⣿⢛⡿⠬⠃⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠈⠘⠹⣿⣿⠛⠛⠛⢿⡇⠀⠉⠀⠘⠉⢰⣯⡊⠙⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠈⠱⡄⠀⠀⠘⠃⠀⠀⠀⠀⠠⠛⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⢲⣄⠀⠒⠂⠀⣀⢴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⣀⣀⣀⣀⣈⠀⢻⣿⣶⣴⣾⡟⢸⣀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⢀⡎⠀⢀⣠⡤⠂⢠⠈⢿⣿⡿⣿⠃⠀⠙⣀⣀⣀⡀⠀⠙⣄⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⢠⠉⠉⢇⠀⠈⡇⠘⣏⠀⡿⡰⠀⠀⢀⠛⠛⠻⣆⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⢸⠉⠉⠉⠗⠒⢿⡀⠸⡈⣠⠧⠞⠉⡏⠉⠉⠉⢹⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠁⠀⠉⠉⠀⠀⠈⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀</pre>";
    return luffy;
}

function troll()
{
    let face = "<pre>    ⠀⠀⠉⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠚⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠘⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⠟⠛⠋⠉⠉⠉⠙⣿⣿⣿⣿⣶⣀⠀<br>\
    ⠀⠀⠀⠰⠶⠿⢰⣿⣶⣦⠀⠀⢸⣿⣿⣦⡄⠀⢀⣴⣾⣿⣿⣿⡿⠿⣿⣿⣿⠇<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠻⠿⠃⠀⠀⠀⣿⣿⣿⣧⠀⠀⠉⣉⣉⣩⣥⡶⠀⠀⠀⣿⡇<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⠀⠀⣻⣿⣿⣿⠃⠀⠀⢠⣿⠃<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⣴⣿⣿⣿⠟⠃⡀⠀⢠⣿⠟⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣄⠀⣤⣤⣤⢰⣿⡦⣿⠀⣿⣿⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠀⠛⠛⠋⠈⠉⠀⠀⢀⣿⣿⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⡆⣤⣤⣄⡄⢀⣀⣀⢀⣀⢀⡄⠀⢨⣿⣿⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⣿⣿⣿⠇⣿⣿⡋⣿⠏⠛⣃⣤⣾⣿⣿⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣄⣠⣤⣠⣴⣶⣾⣿⣿⣿⣿⣿⣿⡀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁</pre>";
    return face;
}

function kfc()
{
    let k = "<pre>    ⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⢉⣉⣉⣉⣉⡛⠛⠛⠛⠛⠛⠛⠻⠻⠿⠿⣿⣿⣿⣿<br>\
    ⣿⣿⣿⣿⠟⠋⠉⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⠀⠁⠀⠄⠀⠄⠀⠌⠉⠛<br>\
    ⣟⠉⠁⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠐⠀⠐⠀⠐⠀<br>\
    ⡟⠀⠀⠀⠒⠋⠉⠉⠈⠀⠉⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠈⢀⠈⠀⠄<br>\
    ⠀⠀⠀⠀⣀⣴⠖⢁⣠⣶⣶⣶⣦⣴⣿⣿⣻⣾⣿⣾⣿⣻⣿⣿⣿⣧⠀⠀⡀⠂⠀<br>\
    ⠀⣀⣰⣾⡿⠁⢠⣻⣽⣿⣟⣿⣟⣿⣿⣽⣿⢿⣷⡿⣟⣿⣷⣷⠹⣿⡆⠀⠀⡀⠁<br>\
    ⠘⣿⣿⡟⠁⠀⡾⣽⣿⣯⣿⣿⣻⣿⣽⣿⣽⣿⡿⣿⣿⢿⣻⣾⡀⠸⣯⠀⠀⠀⠄<br>\
    ⠀⣺⡿⠀⠀⢨⣟⣿⣽⣯⣿⣾⣿⣿⣽⣿⣽⣿⢿⣟⣿⣿⣿⣿⡿⡆⠈⠀⠀⠂⠀<br>\
    ⠀⢺⡯⠀⠀⣼⢾⢻⠿⠻⠿⠽⣷⣿⣯⣿⠿⠚⠛⠙⠉⢈⣀⠠⠌⣀⠀⡀⠀⢀⠁<br>\
    ⠀⠈⠟⢀⣀⢈⣀⠄⢀⢤⠀⠀⠀⠉⣉⣌⠀⢀⠀⠊⢑⣒⠈⠀⣸⣿⡀⣿⡀⠀⡀<br>\
    ⠀⠀⢰⡆⠀⠈⠁⠂⣩⣤⣤⣤⡀⠀⣾⣿⣦⣼⣿⣾⣿⢿⡾⢀⣿⣟⣿⡯⠂⠀⡀<br>\
    ⠀⠀⠀⠑⠀⠀⠹⣶⣿⣿⣿⣿⠋⢀⣷⣿⣟⣿⡯⢿⢾⣿⣷⣾⣿⣻⣿⠃⠀⢀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠐⣤⡿⣿⡾⠂⠰⡅⠓⡿⣿⡻⠃⣄⠈⠚⣽⣾⡿⣟⠛⠀⠀⠄⠀<br>\
    ⠀⠄⠀⠀⠀⠀⠀⠀⠙⠁⠀⠀⠀⣤⣤⣀⣀⣴⣿⣿⣷⣤⡀⢸⣿⡇⠀⠀⠐⠈⣿<br>\
    ⠀⠀⠂⠀⠀⠀⠀⠀⢰⡦⠀⠐⠟⠋⠉⠉⣁⣀⣀⠀⠀⠀⠀⣰⣿⡧⠀⠐⠀⢼⣿<br>\
    ⠀⠁⡀⠂⠀⠀⠀⠀⠹⣽⡄⠀⠀⠀⠀⣉⣥⣤⣦⣶⣿⣷⢐⣿⣿⠇⠀⠀⠒⠛⠛<br>\
    ⠀⠄⠀⠐⠈⠀⠀⠀⠀⠛⣮⣄⡦⠀⠀⣄⣻⣿⣿⣿⣻⣾⣿⣿⡛⠀⣄⠀⠈⠀⠂<br>\
    ⠀⠠⠈⠀⠂⠁⡀⠀⠀⠀⠀⠑⠛⠅⠀⣼⣿⣿⣿⣿⣟⣿⠷⠋⢀⣰⣿⡆⠠⣄⠀<br>\
    ⠀⠄⠂⠐⠀⠁⠀⠀⢀⣄⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⠎⠁⠀⣠⣾⣿⣿⡇⢸⡾⡀<br>\
    ⠀⠠⠐⠀⠂⠁⠀⠀⠸⣾⣗⣦⣀⡀⠀⠀⠛⠿⣿⠏⠀⠤⠚⠛⣿⣿⣿⡃⣸⣿⠆<br>\
    ⠀⠄⠀⠀⠀⠀⠀⣤⠀⢿⣿⣿⠉⠉⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⢸⣿⣿⢰⣿⣿⢧<br>\
    ⠀⠀⠀⠀⡀⠀⠨⣿⢦⠈⢿⣷⡀⠀⠀⠀⢀⡄⠀⠀⢢⣀⠐⢶⣽⣿⠏⣾⣿⣿⣯<br>\
    ⣿⡳⠀⠀⠀⠀⠨⣿⣯⣷⡈⢻⣿⣿⡏⣴⡟⠀⠀⠀⠈⣿⣷⣦⣻⣿⣿⣿⣿⣿⡷<br>\
    ⣿⠀⠀⠀⠁⠀⠀⣿⣿⣷⣿⣦⣙⣿⣿⣻⠁⠀⣲⠀⠀⠹⠿⠟⠟⠛⠋⠋⢉⣉⡉<br>\
    ⡇⠀⠀⠄⠂⠀⠀⠻⠿⠟⠋⠋⠉⠉⠈⠀⠀⠀⠀⠀⠀⢀⠀⡀⠄⢹⣿⠀⠌⣿⡇<br>\
    ⣷⣄⡀⠠⠀⠀⠀⠀⠀⠀⠀⡀⢀⠀⠄⠀⠄⠂⠐⠈⢀⠠⠀⢀⠠⢸⣿⡅⠀⢿⣿<br>\
    ⣿⣿⣿⣦⣄⡀⢀⠠⠀⠂⠁⠀⡀⠀⠄⠂⢀⠐⠀⠂⠀⡀⠄⢀⠀⠨⣿⣇⠀⢘⣿<br>\
    ⣿⣿⣿⣿⣿⣿⣷⣤⣄⣐⠈⠀⡀⠄⠀⠂⢀⠠⠐⠀⠁⢀⠀⡀⠄⠂⣿⣷⡀⠄⣿<br>\
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣷⣶⣤⣤⣥⣀⣄⣀⣂⣈⣀⣠⣠⣤⣤⣿⣿⣾⣿⣿</pre>";
    return k;
}

function squidward()
{
    let s = "<pre>    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠠⠤⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⣀⢤⡒⠉⠁⠀⠒⢂⡀⠀⠀⠀⠈⠉⣒⠤⣀⠀⠀⠀⠀<br>\
    ⠀⠀⣠⠾⠅⠈⠀⠙⠀⠀⠀⠈⠀⠀⢀⣀⣓⡀⠉⠀⠬⠕⢄⠀⠀<br>\
    ⠀⣰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠶⢦⡀⠑⠀⠀⠀⠀⠈⢧⠀<br>\
    ⠀⡇⠀⠀⠀⠀⠀⢤⣀⣀⣀⣀⡀⢀⣀⣀⠙⠀⠀⠀⠀⠀⠀⢸⡄<br>\
    ⠀⢹⡀⠀⠀⠀⠀⡜⠁⠀⠀⠙⡴⠁⠀⠀⠱⡄⠀⠀⠀⠀⠀⣸⠀<br>\
    ⠀⠀⠱⢄⡀⠀⢰⣁⣒⣒⣂⣰⣃⣀⣒⣒⣂⢣⠀⠀⠀⢀⡴⠁⠀<br>\
    ⠀⠀⠀⠀⠙⠲⢼⡀⠀⠙⠀⢠⡇⠀⠛⠀⠀⣌⣀⡤⠖⠉⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⢸⡗⢄⣀⡠⠊⠈⢦⣀⣀⠔⡏⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠈⡇⠀⢰⠁⠀⠀⠀⢣⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⣠⠔⠊⠉⠁⡏⠀⠀⠀⠀⠘⡆⠤⠿⣄⣀⠀⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⣧⠸⠒⣚⡩⡇⠀⠀⠀⠀⠀⣏⣙⠒⢴⠈⡇⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠈⠋⠉⠀⠀⢳⡀⠀⠀⠀⣸⠁⠈⠉⠓⠚⠁⠀⠀⠀⠀<br>\
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠛⠛<\pre>";
    return s;
}

function truckKun()
{
    let t = "<pre>    YOU’VE BEEN FREAKING HIT BY THE<br>\
    <br>\
    |^^^^^^^^^^^^](ﾉ◕ヮ◕)ﾉ*:･ﾟ✧<br>\
    | KAWAII TRUCK | ‘|”“”;.., ___.<br>\
    |_…_…______===|= _|__|…, ] |<br>\
    ”(@ )’(@ )”“”“*|(@ )(@ )*****(@　　　　⊂（ﾟДﾟ⊂⌒） NO KAWAII TRUCK NO!!!</pre>";
    return t;
}

function cowsay()
{
    let c = "<pre>     ______________<br>\
    < hello world! ><br>\
     --------------<br>\
            \\   ^__^<br>\
             \\  (oo)\\_______<br>\
                (__)\\       )\\/\\<br>\
                    ||----w |<br>\
                    ||     ||</pre>";
    return c;
}
function logo()
{
    l = "<pre>                              .^7YPBB####BBG5?~:                          <br>\
                     .!5#@@@&B5YJJ???JYPG#&&@&G7.                     <br>\
                  :J&@@@@@@@@@&BJ~^^^^^^^^^~7YB&@&5^                  <br>\
                7#@@@@&&&&&&&@@@@@G!^^^^^^^^^^^^!5&@&J.               <br>\
              ?&@@@&&&&&&&&&&&&&@@@@?^^^^^^^^^^^^^^7G@@5.             <br>\
            ~&@@&&&&&&&&&&&&&&&&&@@@@!^^^^^^^^^^^^^^^~G@@7            <br>\
           5@@&&&&&&&&&&&&&&&&&&&&@@@G^^^^^^^^^^^^^^^^^7@@B.          <br>\
          #@@&&&&&&&&&&&&&&&&&&&&&&@@#^^^^^^^^^^^^^^^^^^~&@&.         <br>\
         B@@&&&&&&&&&&&&&&&&&&&&&&@@@&^^^^^^^^^^^^^^^^^^^P@@&.        <br>\
        Y@@&&&&&&&&&&&&&&&&&&&&&&&@@@&^^^^^^^^^^^^^^^^^^^#@@@B        <br>\
       .@@&&&&&&&&&&&&&&&&&&&&&&@@@@@@P^^^^^^^^^^^^^^^^^Y@@&#@^       <br>\
       J@@&&&&&&&&&&&&&&&&&&&&@@@@@@@@@#7^^^^^^^^^^^^^!G@@@Y5@G       <br>\
       B@@&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@#57~~^^^~~75#@@@#YJY@&       <br>\
       #@&&&&&@@@@@@&&##&&@@@@@@@@@@@@@@@@@@@@&&&@@@@@@#Y?JJJ@@       <br>\
       B@@&&@@@@&P?7!!!!!!7JG&@@@@@@@@@@@@&&&#&&&&#BP5J?JJJJY@&       <br>\
       ?@@&@@@&J!!!!!!!!!!!!!!5@@@@@@@@#PYJJ?????????JJJJJJJP@G       <br>\
       .@@@@@#!!!!!!!!!!!!!!!!~?@@@@@#Y?JJJJJJJJJJJJJJJJJJJJ&@^       <br>\
        ?@@@@?!!!!!!!!!!!!!!!!!~5@@@B?JJJJJJJJJJJJJJJJJJJJ?B@G        <br>\
         G@@@7!!!!!!!!!!!!!!!!!!J@@@JJJJJJJJJJJJJJJJJJJJJ?G@&         <br>\
          G@@G~!!!!!!!!!!!!!!!!!Y@@&?JJJJJJJJJJJJJJJJJJJJB@&.         <br>\
           J@@G!!!!!!!!!!!!!!!!!J@@@YJJJJJJJJJJJJJJJJJ?5&@P           <br>\
            :#@&Y!!!!!!!!!!!!!!!!#@@&Y?JJJJJJJJJJJJJ?Y#@@!            <br>\
              !&@&P7!!!!!!!!!!!!!!B@@@GJ??JJJJJJ??J5#@@J              <br>\
                ~B@@#57!!!!!!!!!!!!Y#@@@&BP55Y55G&@@#7                <br>\
                  .7#@@&B5J7!!!!!!!~~75#&@@@@@@@@#J.<br>\
                      ^JB&@@&&#BGPPPPPGB#&@@&BY~.<br>\
                          .:~?YPGBBBBGPY?!:.</pre>"
    return l;
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
commands.push(new Command("logo", "Displays the logo of our group", logo, true));
commands.push(new Command("cobra", "", cobra, false))
commands.push(new Command("dattebayo", "", dattebayo, false));
commands.push(new Command("one-piece", "", onePiece, false));
commands.push(new Command("troll", "", troll, false));
commands.push(new Command("kfc", "", kfc, false));
commands.push(new Command("squidward", "", squidward, false));
commands.push(new Command("truck-kun", "", truckKun, false));
commands.push(new Command("cowsay", "", cowsay, false));


commands.sort((a,b) => a.name.localeCompare(b.name)); 