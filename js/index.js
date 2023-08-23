let array = [];

let valorInput = document.getElementById("inputText");
let btnGuardar = document.getElementById("buttonText");

btnGuardar.addEventListener("click", function(){
    array.push(valorInput.value);
});

btnGuardar.addEventListener('click', function(){
    localStorage.setItem("info", JSON.stringify(array));
});