let array = JSON.parse(localStorage.getItem("info"));
let list = array;
let span = document.getElementById("data");

let content = "";
list.forEach(e => {
    content +=
    `
    <li>${e}</li>
    `
});

span.innerHTML = content;