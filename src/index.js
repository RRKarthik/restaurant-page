import {pageLoad} from './init-load.js';
import {contact} from './contact.js';
import {menu} from './menu.js';

function init()
{
    let cont = document.getElementById("contact");
    cont.addEventListener("click",removeContact);
    let home = document.getElementById("home");
    home.addEventListener("click",removeHome);
    let men = document.getElementById("menu");
    men.addEventListener("click",removeMenu);

}

pageLoad();
init();

function removeContact()
{
   
    document.getElementById("content").querySelectorAll("*").forEach(element => element.remove());
    contact();
    init();
}



function removeHome()
{
    document.getElementById("content").querySelectorAll("*").forEach(element => element.remove());
    pageLoad();
    init();
}


function removeMenu()
{
    document.getElementById("content").querySelectorAll("*").forEach(element => element.remove());
    menu();
    init();
}