(()=>{"use strict";function e(){const e=document.createElement("div");e.classList.add("nav-bar");const t=document.createElement("ul"),n=document.createElement("li");n.innerHTML="Home",n.setAttribute("id","home");const d=document.createElement("li");d.innerHTML="Menu",d.setAttribute("id","menu");const c=document.createElement("li");c.innerHTML="Contact",c.setAttribute("id","contact"),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t),document.getElementById("content").appendChild(e);const o=document.createElement("h1"),i=document.createElement("p");o.setAttribute("id","heading"),i.setAttribute("id","para"),o.innerHTML="The Restaurant",i.innerHTML="Eat here and you'll die...of satisfaction.",document.getElementById("content").appendChild(o),document.getElementById("content").appendChild(i)}function t(){document.getElementById("contact").addEventListener("click",n),document.getElementById("home").addEventListener("click",d),document.getElementById("menu").addEventListener("click",c)}function n(){document.getElementById("content").querySelectorAll("*").forEach((e=>e.remove())),function(){const e=document.createElement("div");e.classList.add("nav-bar");const t=document.createElement("ul"),n=document.createElement("li");n.innerHTML="Home",n.setAttribute("id","home");const d=document.createElement("li");d.innerHTML="Menu",d.setAttribute("id","menu");const c=document.createElement("li");c.innerHTML="Contact",c.setAttribute("id","contact"),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t),document.getElementById("content").appendChild(e);const o=document.createElement("h1");o.setAttribute("id","contact-info"),o.innerHTML="Phone:1245124547 <br> email:restaurant@gmail.com",document.getElementById("content").appendChild(o)}(),t()}function d(){document.getElementById("content").querySelectorAll("*").forEach((e=>e.remove())),e(),t()}function c(){document.getElementById("content").querySelectorAll("*").forEach((e=>e.remove())),function(){const e=document.createElement("div");e.classList.add("nav-bar");const t=document.createElement("ul"),n=document.createElement("li");n.innerHTML="Home",n.setAttribute("id","home");const d=document.createElement("li");d.innerHTML="Menu",d.setAttribute("id","menu");const c=document.createElement("li");c.innerHTML="Contact",c.setAttribute("id","contact"),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t),document.getElementById("content").appendChild(e),document.getElementById("content").classList.add("bg");const o=document.createElement("div");o.setAttribute("id","cont");const i=document.createElement("div");i.classList.add("food"),i.setAttribute("id","food-one"),i.innerText="Fries";const l=document.createElement("div");l.classList.add("food"),l.setAttribute("id","food-two"),l.innerText="Pancakes";const a=document.createElement("div");a.classList.add("food"),a.setAttribute("id","food-three"),a.innerText="Pizza",o.style.display="flex",o.style.flexDirection="row",o.appendChild(i),o.appendChild(l),o.appendChild(a),document.getElementById("content").appendChild(o)}(),t()}e(),t()})();