const template = document.querySelector("template").content;

const copy = template.cloneNode(true);

copy.querySelector("H2").textContent = "sam";

const parent = document.querySelector("main");

parent.appendChild(copy);
