const anioActual = new Date().getFullYear();  // Año actual

document.getElementById('btnIniciar').addEventListener('click', function() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let apellido = prompt("¿Cuál es tu apellido?");
    let edad = pedirEdad();

    let yaCumplio = confirm("¿Ya cumpliste años este año?");
    let anioNacimiento = calcularAnioNacimiento(edad, yaCumplio);

    // Mostrar resultados
    alert(`${nombre} ${apellido}, naciste en el año ${anioNacimiento}.`);
    alert(`${nombre} ${apellido}, eres ${edad >= 18 ? "mayor" : "menor"} de edad.`);

    // Mostrar en consola
    console.log(`Usuario: ${nombre} ${apellido}`);
    console.log(`Edad: ${edad}`);
    console.log(`Año de nacimiento: ${anioNacimiento}`);
});

// Función para pedir la edad
function pedirEdad() {
    let edad;
    do {
        edad = parseInt(prompt("¿Cuántos años tienes?"));
        if (isNaN(edad) || edad < 1 || edad > 100) {
            alert("Por favor, ingresa una edad válida entre 1 y 100.");
        }
    } while (isNaN(edad) || edad < 1 || edad > 100);
    return edad;
}

// Función para calcular el año de nacimiento
function calcularAnioNacimiento(edad, yaCumplio) {
    return anioActual - edad - (yaCumplio ? 0 : 1);
}
