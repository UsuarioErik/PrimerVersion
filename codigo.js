function mostrarDato(){
    

    var input = document.getElementById("inputDato");
    var parrafo = document.getElementById("resultado");
    var total = document.getElementById("Total");
    parrafo.innerText +=  "El dato ingresado es \n: " + input.value;
    suma += parseInt(input.value);
    total.innerText = suma;

}

var suma = 0;




// document.getElementById("botonMostrar").onclick = mostrarDato