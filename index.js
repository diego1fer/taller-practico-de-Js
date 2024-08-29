function esBisiesto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Ejemplos de prueba:
console.log(esBisiesto(2020)); // true
console.log(esBisiesto(1900)); // false
console.log(esBisiesto(2000)); // true


function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Ejemplos de prueba:
console.log(celsiusAFahrenheit(0));   // 32
console.log(celsiusAFahrenheit(100)); // 212
console.log(celsiusAFahrenheit(-40)); // -40

function mayorDeDos(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

// Ejemplos de prueba:
console.log(mayorDeDos(10, 5));  // 10
console.log(mayorDeDos(-3, -7)); // -3
console.log(mayorDeDos(4, 4));   // 4

function convertirMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} horas y ${minutosRestantes} minutos`;
}

// Ejemplos de prueba:
console.log(convertirMinutos(130)); // "2 horas y 10 minutos"
console.log(convertirMinutos(45));  // "0 horas y 45 minutos"
console.log(convertirMinutos(60));  // "1 horas y 0 minutos"

function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
}

// Ejemplos de prueba:
console.log(estaEnRango(5, 1, 10)); // true
console.log(estaEnRango(15, 1, 10)); // false
console.log(estaEnRango(10, 10, 10)); // true

function calcularPrecioFinal(precioInicial, descuento) {
    return precioInicial * (1 - descuento / 100);
}

// Ejemplos de prueba:
console.log(calcularPrecioFinal(100, 20)); // 80
console.log(calcularPrecioFinal(200, 10)); // 180
console.log(calcularPrecioFinal(50, 50));  // 25

function puedeVotar(edad) {
    return edad >= 18;
}

// Ejemplos de prueba:
console.log(puedeVotar(17)); // false
console.log(puedeVotar(18)); // true
console.log(puedeVotar(25)); // true


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Ejemplos de prueba:
console.log(calcularAreaTriangulo(10, 5)); // 25
console.log(calcularAreaTriangulo(7, 3));  // 10.5
console.log(calcularAreaTriangulo(6, 6));  // 18
