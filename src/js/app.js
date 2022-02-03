// Create a new element, append it to the html page
// the element should be a navigation 
// it should have a id
// the navigation will have 5 items
// set src attr to #
// attach some css class & id via JS

const nav = document.createElement("nav");
const header = document.querySelector("#header")
nav.setAttribute("id", "main-menu");
const ul = document.createElement("ul");
const menuItems = ["Home", "About", "My Work", "Hire", "Contact"]
menuItems.map((item)=>{
    const li = document.createElement("li")
    li.innerHTML = item;
    ul.appendChild(li);

    return li
})
header.insertAdjacentElement("afterbegin", nav)
nav.insertAdjacentElement("afterbegin", ul)





