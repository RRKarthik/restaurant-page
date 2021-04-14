function menu()
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
   document.getElementById("content").classList.add("bg");
   const mainCont = document.createElement("div");
   mainCont.setAttribute("id","cont");
   const foodOne = document.createElement("div");
   foodOne.classList.add("food");
   foodOne.setAttribute("id","food-one");
   foodOne.innerText = "Fries";

   const foodTwo = document.createElement("div");
   foodTwo.classList.add("food");
   foodTwo.setAttribute("id","food-two");
   foodTwo.innerText = "Pancakes";

   const foodThree = document.createElement("div");
   foodThree.classList.add("food");
   foodThree.setAttribute("id","food-three");
   foodThree.innerText = "Pizza";
   
   mainCont.style.display = "flex";
   mainCont.style.flexDirection = "row";

   mainCont.appendChild(foodOne);
   mainCont.appendChild(foodTwo);
   mainCont.appendChild(foodThree);
   document.getElementById("content").appendChild(mainCont);

}
export {menu};