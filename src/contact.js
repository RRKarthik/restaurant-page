function contact(){
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
    h1.setAttribute("id","contact-info");
    h1.innerHTML = "Phone:1245124547 <br> email:restaurant@gmail.com";
    document.getElementById("content").appendChild(h1);

}

export {contact};