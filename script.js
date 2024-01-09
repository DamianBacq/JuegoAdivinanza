// Aca el juego selecciona un num al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1 
let boton = document.getElementById('reinicio')
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0
let contenedor = null;
let texto = document.getElementById('listado')
// Esta acccion se va a ejecutar cuando se toque el boton Chequear
boton.style.display ="none"

function chequearResultado() {
    texto.style.display = "";
    intentos++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)
    numeroEntrada.disabled = false;

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un num entre 1 y 100'
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicitaciones, adivinaste';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        boton.style.display = "";
        

    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'MAS ALTO';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'MAS BAJO';
        mensaje.style.color = 'red';
    }

    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = numeroIngresado;
    contenedor = document.getElementById('listado');
    contenedor.appendChild(nuevoElemento)

}

function volverAJugar(){
    numeroEntrada.disabled = false;
    mensaje.textContent = 'vamo denuevo';
    mensaje.style.color = 'black';
    numeroEntrada.value = '0';
    boton.style.display = "none";
    intento.textContent = '0';
    texto.textContent = null;
    texto.style.display = "none";

}
