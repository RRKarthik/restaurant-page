

function pageLoad()
{
    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");
    const list = document.createElement("ul");
    const home = document.createElement("li");   
    home.innerHTML = "Home";
    home.setAttribute("id","home");
    const menu = document.createElement("li");
    menu.innerHTML = "Menu";
    menu.setAttribute("id","menu");
    const contact = document.createElement("li");
    contact.innerHTML = "Contact";
    contact.setAttribute("id","contact");
    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(contact);
    navBar.appendChild(list);
    document.getElementById("content").appendChild(navBar);
    const h1 = document.createElement("h1");
    const para = document.createElement("p"); 
    h1.setAttribute("id","heading");
    para.setAttribute("id","para");
    h1.innerHTML = "The Restaurant";
    para.innerHTML = "Eat here and you'll die...of satisfaction.";
    
    document.getElementById("content").appendChild(h1);
    document.getElementById("content").appendChild(para);

}

export {pageLoad};